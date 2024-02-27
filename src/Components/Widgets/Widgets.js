import React from "react";
import "./Widgets.css";
import ContactPhoto from "../../assets/profileAvatar.jpg";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import VideoCallRoundedIcon from "@mui/icons-material/VideoCallRounded";
import Contacts from "./Contacts";

function Widgets() {
	return (
		<div className='widgets'>

			<div className="details">
                    <h4>Contacts</h4>
                    <div className="details__icons">
                        <VideoCallRoundedIcon/>
                        <SearchIcon/>
                        <MoreHorizRoundedIcon/>
                    </div>
            </div>
			<Contacts ImageURL={ContactPhoto} title='Contact 1' />
			<Contacts ImageURL={ContactPhoto} title='Contact 2' />
			<Contacts ImageURL={ContactPhoto} title='Contact 3' />
			<Contacts ImageURL={ContactPhoto} title='Contact 4' />
			<Contacts ImageURL={ContactPhoto} title='Contact 5' />
		</div>
	);
}

export default Widgets;
