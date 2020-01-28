# src folder Structure

  src
  |- assets
  |- components
  |- services
  |- store
  |- stylesheets
  |- utils
  |- views

**all router views are listed in the views folder**

  utils
  |- validators

**validator validates all form data**

  services
  |- api **creates dafault axios connection**
  |- auth **controls Sign In/Sign Up and authorizing users**
  |- protected **handles access to protected appi endpoints**
  |- public **handles access to public api endpoints**

**services is responsible for all api calls**

  store
  |- userContext **stores all user states and errors**
  |- postContext **stores all post states and errors**
  |- commentContext **stores all comments states and errors**

**all shared data is handled via store and uses React Context API**

# services

all of these methods are accessed from store reducers

## api

contains default axios connection
all api calls returns some data and errors, if available

## auth

contains **signIn**, **signUp** and **addAuthHeader** methods

## protected

contains **addPostToDB**, **updatePostToDB**, **deletePostFromDB**, **upvotePostOnDB**, **downvotePostOnDB**
         **addCommentToDB**, **updateCommentToDB**, **deleteCommentFromDB**

these methods are only valid with an access token

## public

contains **getAllPosts**, **getSinglePost**, **getFilteredPost**, **getUserPost**, **downvotePostOnDB**
         **getComments**

these methods can be accessed without access token