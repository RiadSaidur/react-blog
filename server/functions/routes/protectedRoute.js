const router = require('express').Router();

const {
  addNewPost,
  addNewComment,
  updateComment,
  updatePost,
  deletePost,
  deleteComment
} = require('../handlers/protected_handlers');

router.post('/post', addNewPost);
router.post('/comment/:id', addNewComment);

router.patch('/post/:id', updatePost);
router.patch('/comment/:id/:key', updateComment);

router.delete('/post/:id', deletePost);
router.delete('/comment/:id/:key', deleteComment);

module.exports = router;