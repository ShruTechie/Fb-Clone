import React, { useState } from "react";
import "./Feed.css";
import StoryReel from "../Story/StoryReel";
import MessageSender from "../Feed/MessageSender";
import Post from "../Feed/Post";
import mockPosts from '../../utils/mockPosts'

function Feed() {
	const [ posts, setPosts ] = useState(mockPosts || []);
	

	const renderPosts = () => {
		return posts.map((post) => (
			<Post
				key={post.id}
				postId={post.id}
				profilePic={post.data.profilePic}
				message={post.data.message}
				timestamp={post.data.time}
				username={post.data.username}
				image={post.data.image}
				comments={post.comments || []}
				setComments={comments => setPosts(prevPosts => prevPosts.map(prevPost => prevPost.id === post.id ? { ...prevPost, comments } : prevPost))}
		/>
		));
	};

	return (
		<div className='feed'>
			<StoryReel />
			<MessageSender />
			{renderPosts()}
		</div>
	);
}

export default Feed;
