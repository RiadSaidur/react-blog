const { db, admin } = require('../utils/admin');

const addNewPost = async (req, res) => {
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
      return res.json({ message: "Document Created Successfully" });
    } catch (error) {
      return res.json({ error: 'something went wrong' });
    }
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }
}

const addNewComment = async (req, res) => {
  let id = req.params.id;
  const comment = {
    key: Math.floor(Math.random()*10000),
    user: req.body.user,
    msg: req.body.msg,
    createdAt: new Date().toISOString()
  };
  let comments = [];
  
  try {
    const docs = await db.collection('comments').where('postId', '==', id).get();
    docs.forEach( doc => {
      comments = doc.data();
      id = doc.id;
    });
  } catch (error) {
    return res.json({ error: 'something went wrong' });
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
}

const updateComment = async (req, res) => {
  const key = parseInt(req.params.key);
  let comments = [];
  let id;
  
  try {
    const docs = await db.collection('comments').where('postId', '==', req.params.id).get();
    docs.forEach( doc => {
      comments = doc.data().cmnts;
      id = doc.id;
    });
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }
  
  const idx = comments.findIndex(comment => {
    return comment.key === key;
  });
  comments[idx].msg = req.body.msg;
  
  try {
    await db.collection('comments').doc(id).update({ cmnts: comments });
    return res.status(201).json({ message: "comment successfully edited"});
  } catch (error) {
    return res.json({ error: 'something went wrong svaing the comment' });
  }
}

const updatePost = async (req, res) => {
  const id = req.params.id;
  try {
    await db.collection('posts').doc(id).update({ msg: req.body.msg, title: req.body.title });
    return res.status(201).json({ message: "post-body successfully edited"});
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }
}

const deletePost = async (req, res) => {
  try {
    await db.collection('posts').doc(req.params.id).delete();
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }

  try {
    const docRef = await db.collection('comments').where('postId', '==', req.params.id).get();
    docRef.forEach(doc => doc.ref.delete());
  } catch (error) {
    return res.json({ error: 'something went wrong deleteing comments' });
  }

  return res.status(201).json({ message: "post deleted successfully"});
}

const deleteComment = async (req, res) => {
  const key = parseInt(req.params.key);
  let comments = [];
  let id;
  
  try {
    const docs = await db.collection('comments').where('postId', '==', req.params.id).get();
    docs.forEach( doc => {
      comments = doc.data().cmnts;
      id = doc.id;
    });
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }

  comments = comments.filter(comment => comment.key != key);

  try {
    await db.collection('comments').doc(id).update({ cmnts: comments });
  } catch (error) {
    return res.json({ error: 'something went wrong deleteing comments' });
  }

  return res.status(201).json({ message: "comment deleted successfully"});
}

module.exports = {
  addNewPost,
  addNewComment,
  updateComment,
  updatePost,
  deletePost,
  deleteComment
}