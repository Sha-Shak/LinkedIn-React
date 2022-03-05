import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import ShareIcon from "@mui/icons-material/Share";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import Avatar from "@mui/material/Avatar";
import React from 'react';
import InputOption from './InputOption';
import './Posts.css';

function Posts({name, description, message, photoUrl}) {
  return (
		<div className="post">
			<div className="post__header">
				{<Avatar className="headerOption_icon" src="" id="" />}
				<div className="post__info">
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className="post___body">
				<p>{message}</p>
			</div>
			<div className="post__buttons">
				<InputOption Icon={ThumbUpIcon} title="Like" />
				<InputOption Icon={CommentIcon} title="Comment" />
				<InputOption Icon={ShareIcon} title="Share" />
				<InputOption Icon={SendIcon} title="Send" />
			</div>
		</div>
	);
}

export default Posts;
