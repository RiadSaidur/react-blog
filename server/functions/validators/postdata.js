const validatePost = post => {
  if(
    post.title.trim() === '' ||
    post.msg.trim() === ''
  ) return false;
  return true;
}

const validateComment = comment => {
  if( comment.msg.trim() === '' ) return false;
  return true;
}

module.exports = {
  validatePost,
  validateComment
}