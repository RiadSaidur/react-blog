import React from 'react'

export default React.createContext({
  comments: [],
  addNewComment: content => {},
  updateComment: content => {},
  removeComment: id => {}
});