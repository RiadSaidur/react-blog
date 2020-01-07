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

exports.api = functions.region('asia-east2').https.onRequest(app);