import React from 'react'

export default React.createContext({
  commentCollection: [],
  setComments: () => {},
  addNewComment: content => {},
  updateComment: content => {},
  removeComment: id => {}
});