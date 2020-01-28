import React from 'react'

export default React.createContext({
  posts: {
    postsCollections: [],
    errors: []
  },
  clearError: idx => {},
  setPosts: () => {},
  setPostsByUser: () => {},
  setPostsByTag: () => {},
  upvote: key => {},
  downvote: key => {},
  addNewPost: post => {},
  updatePost: content => {},
  removePost: id => {},
});