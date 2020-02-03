# src folder Structure

  src<br>
  |- assets<br>
  |- components<br>
  |- services<br>
  |- store<br>
  |- stylesheets<br>
  |- utils<br>
  |- views<br>

**all router views are listed in the views folder**

  utils<br>
  |- validators<br>

**validator validates all form data**

  services<br>
  |- api **creates dafault axios connection**<br>
  |- auth **controls Sign In/Sign Up and authorizing users**<br>
  |- protected **handles access to protected appi endpoints**<br>
  |- public **handles access to public api endpoints**<br>

**services is responsible for all api calls**

  store
  |- userContext **stores all user states and errors**<br>
  |- postContext **stores all post states and errors**<br>
  |- commentContext **stores all comments states and errors**<br>

**all shared data is handled via store and uses React Context API**

# services

all of these methods are accessed from store reducers

## api

contains default axios connection
all api calls returns some data and errors, if available

## auth

contains **signIn**, **signUp** and **addAuthHeader** methods

## protected

contains **addPostToDB**, **updatePostToDB**, **deletePostFromDB**, **upvotePostOnDB**, **downvotePostOnDB**<br>
         **addCommentToDB**, **updateCommentToDB**, **deleteCommentFromDB**

these methods are only valid with an access token

## public

contains **getAllPosts**, **getSinglePost**, **getFilteredPost**, **getUserPost**, **downvotePostOnDB**<br>
         **getComments**

these methods can be accessed without access token