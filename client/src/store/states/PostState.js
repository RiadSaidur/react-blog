import React, { useReducer } from 'react'

import PostContext from '../contexts/PostContext';
import {
  postReducer,
  UPVOTE,
  DOWNVOTE
  // ADD_NEW_POST,
  // ADD_NEW_COMMENT,
  // REMOVE_POST,
  // REMOVE_COMMENT
} from '../reducers/PostReducers'

const PostState = props => {
  const posts = [
    {
      id: 'qK8gorBgKHc4ITmQEcrk',
      tags: [ 'delete', 'test', 'react' ],
      createdAt: '2020-01-12T19:33:35.149Z',
      counts: 6,
      title: 'still authorized',
      msg: 'this is epic',
      author: 'boomer',
      likes: 0,
      cmntId: 'pey92CA3jpmth6p1XajW',
      downvotes: [],
      upvotes: [ 'boomer' ]
    },
    {
      id: 'b4t4w5SnJ22FVZiXFL8p',
      likes: 0,
      tags: [ 'react', 'song' ],
      createdAt: '2020-01-10T04:05:51.429Z',
      counts: 1,
      title: 'this post was made from an api',
      msg: 'I am very exited and stupid',
      author: 'saidur',
      cmntId: 'pey92CA3jpmth6p1XajW',
      downvotes: [],
      upvotes: [ 'boomer' ]
    },
    {
      id: 'yjRPsY4rnFVLFB6pqjAB',
      title: 'First Post',
      msg: 'So familiar and overwhelmingly pure',
      author: 'saidur',
      cmntId: 'UHRd23B3PQfSfnUVL0jG',
      likes: 8,
      tags: [ 'song', 'lyric', 'tool' ],
      createdAt: '2020-01-12T19:33:35.149Z',
      counts: 0,
      downvotes: [ "boomer" ],
      upvotes: []
    },
    {
      id: 'g2lGLvJ3ZOwOeNb7SeQd',
      tags: [ 'stupid', 'pixxel', 'tool', 'react' ],
      createdAt: '2020-01-12T19:33:35.149Z',
      counts: 2,
      title: 'this is a dummy me',
      msg: 'edited my post again, bruh',
      author: 'rakib',
      cmntId: 'NP0GV8J9u8XD1d9dKhsu',
      likes: 2,
      downvotes: [ "boomer" ],
      upvotes: []
    }
  ];

  const [ postState, dispatch ] = useReducer(postReducer, posts);

  const upvote = key => dispatch({ type: UPVOTE, key });
  const downvote = key => dispatch({ type: DOWNVOTE, key });

  return (
    <PostContext.Provider
      value={{
        posts: postState,
        upvote,
        downvote
      }}
    >
      {props.children}
    </PostContext.Provider>
  )
}

export default PostState;