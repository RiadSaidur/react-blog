const validatePost = post => {
  if(
    post.title.trim() === '' ||
    post.msg.trim() === ''
  ) return { error: 'title or body should not be emnpy'};
}

const validateComment = comment => {
  if( comment.msg.trim() === '' ) return { error: 'body should not be emnpy'};
}

module.exports = {
  validatePost,
  validateComment
}