import React from 'react'

export default React.createContext({
  posts: [],
  upvote: key => {},
  downvote: key => {},
  addNewPost: post => {},
  addNewComment: id => {},
  removePost: id => {},
  removeComment: id => {}
});