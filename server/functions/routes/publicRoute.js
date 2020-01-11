const router = require('express').Router();

const {
  getAllPosts,
  getPostComments,
  getPostsbyTag,
  getPostsByUser
} = require('../handlers/public_handlers');

router.get('/', getAllPosts);
router.get('/comments/:id', getPostComments);
router.get('/filter/:tag', getPostsbyTag);
router.get('/user/:handle', getPostsByUser);

module.exports = router;