import React from 'react';

import EditComment from "./EditComment";
import EditPost from './EditPost';

function Edit({ match }){
  const dlt = () => {
    //Delete Post
  }
  
  return(
    <div className="edit-contrainer">
      <h1>Update</h1>
      { match.params.type === 'comment' && <EditComment id={match.params.id}/> }
      { match.params.type === 'post' && <EditPost id={match.params.id}/> }
      <button onClick={dlt} className="delete">Delete Comment</button>
    </div>
  )
}

export default Edit;