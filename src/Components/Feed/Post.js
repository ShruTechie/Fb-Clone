import React, { useState } from "react";
import { Avatar, TextField, IconButton } from "@mui/material";
import {ThumbUpAltOutlined, ChatBubbleOutlineRounded, ReplyRounded, Send } from "@mui/icons-material";
import "./Post.css";
import Comment from './Comment';

function Post({ profilePic, image, username, timestamp, message }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [showComments, setShowComments] = useState(false);

    const handleToggleComments = () => {
        setShowComments(!showComments);
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            setComments(prevComments => [...prevComments, newComment]);
            setNewComment('');
        }
    };

    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar className='post__avatar' src={profilePic} />
                <div className='post__topInfo'>
                    <h3>{username}</h3>
                    <p>{timestamp}</p>
                </div>
            </div>
            <div className='post__bottom'>
                <p>{message}</p>
            </div>
            <div className='post__image'>
                {image && <img src={image} alt='' />}
            </div>
			<div className="comments-count">
				{comments?.length > 0 && `${comments.length} comment`}
			</div>
            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpAltOutlined />
                    <p>Like</p>
                </div>
                <div className='post__option' onClick={handleToggleComments}>
                    <ChatBubbleOutlineRounded />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <ReplyRounded
                        style={{ transform: "rotateY(180deg)" }}
                    />
                    <p>Share</p>
                </div>
            </div>
            {showComments && (
				<>
					<div className="comment-section">
                        <Comment comments={comments}/>
					</div>
					<div className='post__comments'>
						<TextField
							label="Add a comment"
							value={newComment}
							onChange={(e) => setNewComment(e.target.value)}
							onKeyDown={(e) => {
								if (e.key === 'Enter') {
									handleAddComment();
								}
							} } />
					<IconButton className="comment__send" onClick={handleAddComment}>
                        	<Send />
                    </IconButton>
					</div>
				</>
            )}
        </div>
    );
}

export default Post;
