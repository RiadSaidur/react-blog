const functions = require('firebase-functions');
const admin = require('firebase-admin');
const app = require('express')();

admin.initializeApp();

const db = admin.firestore();

app.get('/posts', async (req, res) => {
  const docs = await db.collection('posts').orderBy('createdAt', 'desc').get();
  let posts = [];
  docs.forEach(doc => {
    posts.push(doc.data());
  });
  return res.json(posts);
});

app.post('/comments', async (req, res) => {
  const id = req.body.id;
  const docs = await db.collection('comments').doc(id).get();
  return res.json(docs.data());
});

app.post('/newcommment', async (req, res) => {
  const id = req.body.id;
  const comment = {
    key: Math.floor(Math.random()*10000),
    user: req.body.user,
    msg: req.body.msg,
    createdAt: new Date().toISOString()
  };
  await db.collection('comments').doc(id).update({ cmnts: admin.firestore.FieldValue.arrayUnion(comment)});
  return res.status(201).json({ message: "comment successfully added"});
});

exports.api = functions.region('asia-east2').https.onRequest(app);