import React from 'react';

import EditComment from "../components/EditComment";
import EditPost from '../components/EditPost';

function Edit({ match }){
  return(
    <div className="edit-contrainer">
      { match.params.type === 'comment' && <EditComment id={match.params.id}/> }
      { match.params.type === 'post' && <EditPost id={match.params.id}/> }
    </div>
  )
}

export default Edit;