import React from 'react'

export default React.createContext({
  posts: [],
  setPosts: () => {},
  upvote: key => {},
  downvote: key => {},
  addNewPost: post => {},
  updatePost: content => {},
  removePost: id => {},
});