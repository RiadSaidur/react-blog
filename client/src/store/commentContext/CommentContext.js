import React from 'react'

export default React.createContext({
  comments:{
    commentCollection: [],
    errors: []
  },
  clearError: idx => {},
  setComments: () => {},
  addNewComment: content => {},
  updateComment: content => {},
  removeComment: id => {}
});