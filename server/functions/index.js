const functions = require('firebase-functions');

const app = require('express')();

const publicRoute = require('./routes/publicRoute');
const protectedRoute = require('./routes/protectedRoute');

app.use('/public', publicRoute);
app.use('/protected', protectedRoute);

// app.post('/posts', async (req, res) => {
//   try {
//     const post = {
//       author: req.body.author,
//       title: req.body.title,
//       msg: req.body.msg,
//       tags: req.body.tags,
//       counts: 0,
//       createdAt: new Date().toISOString()
//     }
//     const newpost = await db.collection('posts').add(post);
//     try {
//       await db.collection('comments').add({ cmnts: [], postId: newpost.id });
//       res.json({ message: "Document Created Successfully" });
//     } catch (error) {
//       res.json(error)
//     }
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }
// });


// app.post('/newcommment/:id', async (req, res) => {
//   let id = req.params.id;
//   const comment = {
//     key: Math.floor(Math.random()*10000),
//     user: req.body.user,
//     msg: req.body.msg,
//     createdAt: new Date().toISOString()
//   };
//   let comments = [];
//   try {
//     const docs = await db.collection('comments').where('postId', '==', id).get();
//     docs.forEach( doc => {
//       comments = doc.data();
//       id = doc.id;
//     });
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }

//   try {
//     await db.collection('comments').doc(id).update({ cmnts: admin.firestore.FieldValue.arrayUnion(comment)});
//   } catch (error) {
//     return res.json({ error: "update function is broken" });
//   }

//   try {
//     await db.collection('posts').doc(comments.postId).update({ counts:  admin.firestore.FieldValue.increment(1)});
//   } catch (error) {
//     return res.json({ error: "increment function is broken" });
//   }

//   return res.status(201).json({ message: "comment successfully added"});
// });


// app.patch('/editcomment/:id/:key', async (req, res) => {
//   const key = parseInt(req.params.key);
//   let comments = [];
//   let id;
  
//   try {
//     const docs = await db.collection('comments').where('postId', '==', req.params.id).get();
//     docs.forEach( doc => {
//       comments = doc.data().cmnts;
//       id = doc.id;
//     });
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }
  
//   const idx = comments.findIndex(comment => {
//     return comment.key === key;
//   });
//   comments[idx].msg = req.body.msg;
  
//   try {
//     await db.collection('comments').doc(id).update({ cmnts: comments });
//     return res.status(201).json({ message: "comment successfully edited"});
//   } catch (error) {
//     return res.json({ error: 'something went wrong svaing the comment' });
//   }
// });


// app.patch('/editpostbody/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.collection('posts').doc(id).update({ msg: req.body.msg });
//     return res.status(201).json({ message: "post-body successfully edited"});
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }
// });


// app.patch('/editposttitle/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.collection('posts').doc(id).update({ title: req.body.title });
//     return res.status(201).json({ message: "post-title successfully edited"});
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }
// });


// app.patch('/editposttags/:id', async (req, res) => {
//   const id = req.params.id;
  
//   try {
//     await db.collection('posts').doc(id).update({ tags: admin.firestore.FieldValue.arrayUnion(req.body.tag) });
    
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }
  
//   return res.status(201).json({ message: "post-tags successfully edited"});
// });











// app.delete('/deletepost/:id', async (req, res) => {
//   try {
//     await db.collection('posts').doc(req.params.id).delete();
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }

//   try {
//     const docRef = await db.collection('comments').where('postId', '==', req.params.id).get();
//     docRef.forEach(doc => doc.ref.delete());
//   } catch (error) {
//     return res.json({ error: 'something went wrong deleteing comments' });
//   }

//   return res.status(201).json({ message: "post deleted successfully"});
// });


// app.delete('/editposttags/:id', async (req, res) => {
//   const id = req.params.id;
//   try {
//     await db.collection('posts').doc(id).update({ tags: admin.firestore.FieldValue.arrayRemove(req.body.tag) });
//     return res.status(201).json({ message: "post-tags successfully deleted"});
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }
// });


// app.delete('/deletecomment/:id/:key', async (req, res) => {
//   const key = parseInt(req.params.key);
//   let comments = [];
//   let id;
  
//   try {
//     const docs = await db.collection('comments').where('postId', '==', req.params.id).get();
//     docs.forEach( doc => {
//       comments = doc.data().cmnts;
//       id = doc.id;
//     });
//   } catch (error) {
//     return res.json({ error: 'something went wrong' });
//   }

//   comments = comments.filter(comment => comment.key != key);

//   try {
//     await db.collection('comments').doc(id).update({ cmnts: comments });
//   } catch (error) {
//     return res.json({ error: 'something went wrong deleteing comments' });
//   }

//   return res.status(201).json({ message: "comment deleted successfully"});
// });

exports.api = functions.region('asia-east2').https.onRequest(app);





