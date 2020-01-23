const { db } = require('../utils/admin');

const getAllPosts = async (req, res) => {
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
    return res.json({ error: 'something went wrong' });
  }
}

const getSinglePosts = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = (await db.collection('posts').doc(id).get()).data();
    return res.json(doc);
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }
}

const getPostComments = async (req, res) => {
  const id = req.params.id;
  try {
    const docs = await db.collection('comments').where('postId', '==', id).get();
    const comments = [];
    docs.forEach( doc => {
      comments.push(doc.data());
    });
    return res.json(comments);
  } catch (error) {
    return res.status(500).json({ error: 'something went wrong' });
  }
}

const getPostsbyTag = async (req, res) => {
  try {
    const docs = await db.collection('posts').where('tags', 'array-contains', req.params.tag).get();
    let posts = [];
    docs.forEach(doc => {
      const post = {
        id: doc.id,
        ...doc.data()
      };
      posts.push(post);
    });
    return res.json(posts);
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }
}

const getPostsByUser = async (req, res) => {
  try {
    const docs = await db.collection('posts').where('author', '==', req.params.handle).get();
    let posts = [];
    docs.forEach(doc => {
      const post = {
        id: doc.id,
        ...doc.data()
      };
      posts.push(post);
    });
    return res.json(posts);
  } catch (error) {
    return res.json({ error: 'something went wrong' });
  }
}

module.exports = {
  getAllPosts,
  getSinglePosts,
  getPostComments,
  getPostsbyTag,
  getPostsByUser
}