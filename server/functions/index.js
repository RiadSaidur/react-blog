const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();

admin.initializeApp();

const db = admin.firestore();

app.get('/posts', async (req, res) => {
  try {
    const docs = await db.collection('posts').orderBy('createdAt', 'desc').get();
    let posts = [];
    docs.forEach(doc => {
      const post = {
        id: doc.id,
        ...doc.data()
      }
      posts.push(post);
    });
    return res.json(posts);
  } catch (error) {
    res.json(error);
  }
});

app.post('/posts', async (req, res) => {
  try {
    const post = {
      author: req.body.author,
      title: req.body.title,
      msg: req.body.msg,
      tags: req.body.tags,
      counts: 0,
      createdAt: new Date().toISOString()
    }
    const newpost = await db.collection('posts').add(post);
    try {
      await db.collection('comments').add({ cmnts: [], postId: newpost.id });
      res.json({ message: "Document Created Successfully" });
    } catch (error) {
      res.json(error)
    }
  } catch (error) {
    res.json(error);
  }
});

app.get('/comments/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const docs = await db.collection('comments').where('postId', '==', id).get();
    const comments = [];
    docs.forEach( doc => {
      comments.push(doc.data());
    });
    return res.json(comments);
  } catch (error) {
    res.json(error);
  }
});

app.post('/newcommment/:id', async (req, res) => {
  let id = req.params.id;
  const comment = {
    key: Math.floor(Math.random()*10000),
    user: req.body.user,
    msg: req.body.msg,
    createdAt: new Date().toISOString()
  };
  const docsRef = db.collection('comments').where('postId', '==', id);
  let comments = [];
  try {
    // await db.collection('comments').doc(id).update({ cmnts: admin.firestore.FieldValue.arrayUnion(comment)});
    const docs = await docsRef.get();
    docs.forEach( doc => {
      comments = (doc.data());
      id = (doc.id);
    });
  } catch (error) {
    res.json({ error: "something went wrong" });
  }

  try {
    await db.collection('comments').doc(id).update({ cmnts: admin.firestore.FieldValue.arrayUnion(comment)});
  } catch (error) {
    return res.json({ error: "update function is broken" });
  }

  try {
    await db.collection('posts').doc(comments.postId).update({ counts:  admin.firestore.FieldValue.increment(1)});
  } catch (error) {
    return res.json({ error: "increment function is broken" });
  }

  return res.status(201).json({ message: "comment successfully added"});
});

app.patch('/editcomment/:id/:key', async (req, res) => {
  const id = req.params.id;
  const key = parseInt(req.params.key);
  try {
    const docs = await db.collection('comments').doc(id).get();
    let comments = docs.data().cmnts;
    const idx = comments.findIndex(comment => {
      return comment.key === key;
    });
    comments[idx].msg = req.body.msg;
    try {
      await db.collection('comments').doc(id).set({ cmnts: comments });
      return res.status(201).json({ message: "comment successfully edited"});
    } catch (error) {
      res.json(error);
    }
  } catch (error) {
    res.json(error);
  }
});

app.patch('/editpostbody/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('posts').doc(id).update({ msg: req.body.msg });
    return res.status(201).json({ message: "post-body successfully edited"});
  } catch (error) {
    res.json(error);
  }
});

app.patch('/editposttitle/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('posts').doc(id).update({ title: req.body.title });
    return res.status(201).json({ message: "post-title successfully edited"});
  } catch (error) {
    res.json(error);
  }
});

app.patch('/editposttags/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('posts').doc(id).update({ tags: admin.firestore.FieldValue.arrayUnion(req.body.tag) });
    return res.status(201).json({ message: "post-tags successfully edited"});
  } catch (error) {
    res.json(error);
  }
});

app.delete('/editposttags/:id', async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('posts').doc(id).update({ tags: admin.firestore.FieldValue.arrayRemove(req.body.tag) });
    return res.status(201).json({ message: "post-tags successfully deleted"});
  } catch (error) {
    res.json(error);
  }
});

exports.api = functions.region('asia-east2').https.onRequest(app);





