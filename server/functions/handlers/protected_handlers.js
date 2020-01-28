const { db, admin } = require('../utils/admin');

const {
  validatePost,
  validateComment
} = require('../validators/postdata');

const addNewPost = async (req, res) => {
  if(!validatePost({title: req.body.title, msg: req.body.msg})) return res.json({ error: 'invalid form data'} );

  try {
    const post = {
      author: req.user.handle,
      title: req.body.title,
      msg: req.body.msg,
      tags: req.body.tags,
      counts: 0,
      likes: 0,
      upvote: [],
      downvote: [],
      createdAt: new Date().toISOString()
    }
    const newpost = await db.collection('posts').add(post);
    try {
      await db.collection('comments').add({ cmnts: [], postId: newpost.id });
      return res.json({ message: "Document Created Successfully" });
    } catch (error) {
      return res.status(500).json({ error: 'something went wrong' });
    }
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }
}

const addNewComment = async (req, res) => {
  if(!validateComment({ msg: req.body.msg })) return res.status(400).json({ error: 'invalid form data'} );

  let id = req.params.id;

  const comment = {
    key: Math.floor(Math.random()*10000),
    author: req.user.handle,
    msg: req.body.msg,
    createdAt: new Date().toISOString()
  };
  let postId;
  
  try {
    const docs = await db.collection('comments').where('postId', '==', id).get();
    docs.forEach( doc => {
      postId = doc.data().postId;
      id = doc.id;
    });
  } catch (error) {
    return res.status(404).json({ error: 'something went wrong' });
  }

  try {
    await db.collection('comments').doc(id).update({ cmnts: admin.firestore.FieldValue.arrayUnion(comment) });
  } catch (error) {
    return res.status(500).json({ error: "update function is broken" });
  }

  try {
    await db.collection('posts').doc(postId).update({ counts:  admin.firestore.FieldValue.increment(1)});
  } catch (error) {
    return res.status(500).json({ error: "increment function is broken" });
  }

  return res.status(201).json({ message: "comment successfully added"});
}

const updatePost = async (req, res) => {
  if(!validatePost({title: req.body.title, msg: req.body.msg})) return res.json({ error: 'invalid form data'} );

  const id = req.params.id;

  try {
    const docRef =  db.collection('posts').doc(id);
    const post = await docRef.get();

    if(post.data().author != req.user.handle) return res.status(403).json({ error: `unauthorized access` });
    
    await docRef.update({ msg: req.body.msg, title: req.body.title });
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }

  return res.status(201).json({ message: "post-body successfully edited"});
}

const updateComment = async (req, res) => {
  if(!validateComment({ msg: req.body.msg })) return res.status(400).json({ error: 'invalid form data'} );
  
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
    return res.status(404).json({ error: 'something went wrong' });
  }
  
  const idx = comments.findIndex(comment => {
    return comment.key === key;
  });

  if(comments[idx].author != req.user.handle) return res.status(403).json({ error: 'unauthorized access' });

  comments[idx].msg = req.body.msg;
  
  try {
    await db.collection('comments').doc(id).update({ cmnts: comments });
    return res.status(201).json({ message: "comment successfully edited"});
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong saving the comment' });
  }
}

const deletePost = async (req, res) => {
  const docRef = db.collection('posts').doc(req.params.id);
  const post = await docRef.get();
  if(post.data().author != req.user.handle) return res.status(403).json({ error: `unauthorized access` });
  try {
    await docRef.delete();
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }

  try {
    const docRef = await db.collection('comments').where('postId', '==', req.params.id).get();
    docRef.forEach(doc => doc.ref.delete());
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong deleteing comments' });
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
    return res.status(404).json({ error: 'something went wrong' });
  }

  const idx = comments.findIndex(comment => {
    return comment.key === key;
  });

  if(comments[idx].author != req.user.handle) return res.status(403).json({ error: 'unauthorized access' });

  comments.splice(idx, 1);

  try {
    await db.collection('comments').doc(id).update({ cmnts: comments });
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong deleteing comments' });
  }

  try {
    await db.collection('posts').doc(req.params.id).update({ counts:  admin.firestore.FieldValue.increment(-1)});
  } catch (error) {
    return res.status(500).json({ error: "increment function is broken" });
  }

  return res.status(201).json({ message: "comment deleted successfully"});
}

const upvote = async (req, res) => {
  try {
    await db.collection('posts').doc(req.params.id).update({
      likes: admin.firestore.FieldValue.increment(1),
      upvote: admin.firestore.FieldValue.arrayUnion(req.user.handle),
      downvote: admin.firestore.FieldValue.arrayRemove(req.user.handle)
    });
    return res.status(204).json({ success: 'successfully upvoted the post' });
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }
}

const downvote = async (req, res) => {
  try {
    await db.collection('posts').doc(req.params.id).update({
      likes: admin.firestore.FieldValue.increment(-1),
      downvote: admin.firestore.FieldValue.arrayUnion(req.user.handle),
      upvote: admin.firestore.FieldValue.arrayRemove(req.user.handle)
    });
    return res.status(204).json({ success: 'successfully downvoted the post' });
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }
}

module.exports = {
  addNewPost,
  addNewComment,
  updateComment,
  updatePost,
  deletePost,
  deleteComment,
  upvote,
  downvote
}