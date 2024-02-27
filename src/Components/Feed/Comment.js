import React from 'react';
import { PersonPin } from '@mui/icons-material';
import './Comment.css';

const Comment = ({ comments }) => {

  const displayCommentDetails = (comment, index) => {
		let res = <div className="comment-area"><strong>User {index + 1}</strong><p>{comment}</p></div>
		return res;
	}

  return (
    <div>
      {
        comments.map((comment, index) => (
              <div className="user-comments">
                <PersonPin />
                <div>{displayCommentDetails(comment, index)}</div> 
              </div>
            
        ))
      }
    </div>
  );
};

export default Comment;
