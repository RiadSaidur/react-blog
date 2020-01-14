import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Posts from '../components/Posts';

import '../stylesheets/Home.css'

function Signin(){
  const [posts, updatePosts] = useState([
    {
      id: 'qK8gorBgKHc4ITmQEcrk',
      tags: [ 'delete', 'test', 'react' ],
      createdAt: '2020-01-12T19:33:35.149Z',
      counts: 6,
      title: 'still authorized',
      downvotes: [],
      msg: 'this is epic',
      author: 'boomer',
      likes: 0,
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
      cmntId: 'pey92CA3jpmth6p1XajW'
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
      counts: 0
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
      likes: 2
    }
  ]);
  const upvote = key => {
    let updates = posts;
    updates[key].likes++;
    updatePosts([...updates]);
  };
  const downvote = key => {
    let updates = posts;
    updates[key].likes--;
    updatePosts([...updates]);
  };
  return(
    <div className='container'>
      <button className='newpost-cta nu-elevate-cta'>
        <Link to='/p/newpost'><span>+</span> New Post</Link>
      </button>
      <Posts posts={posts} upvote={upvote} downvote={downvote}/>
    </div>
  )
}

export default Signin;