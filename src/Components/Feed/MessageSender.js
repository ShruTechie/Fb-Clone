import React, { useState } from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import { Videocam, PhotoLibrary, InsertEmoticon } from "@mui/icons-material";

function MessageSender() {
	const [input, setInput] = useState("");
	const [imageURL, setImageURL] = useState("");

	return (
		<div className='messageSender'>
			<div className='messageSender__top'>
				{" "}
				<Avatar src={"user.photoURL"} alt='Facebook Profile Avatar' />
				<form action="">
                <input
                        value = {input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender__input'
                        placeholder={`What's on your mind, ${"User"}?`}>
                    </input>

                    <input
                        value = { imageURL }
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder={`Image URL (Optional)`}>
                    </input>

					<button type='submit'></button>
				</form>
			</div>

			<div className='messageSender__bottom'>
				{" "}
				<div className='messageSender__option'>
					<Videocam style={{ color: "red" }} />
					<h3> Live video</h3>
				</div>
				<div className='messageSender__option'>
					<PhotoLibrary style={{ color: "green" }} />
					<h3> Photo/video</h3>
				</div>
				<div className='messageSender__option'>
					<InsertEmoticon style={{ color: "orange" }} />
					<h3> Feeling/activity</h3>
				</div>
			</div>
		</div>
	);
}

export default MessageSender;
