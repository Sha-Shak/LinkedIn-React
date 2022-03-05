import Avatar from "@mui/material/Avatar";
import React from 'react';
import coverPhoto from './images/ocean.jpeg';
import './Sidebar.css';

function Sidebar() {
	const recentItems = (topic) =>(
		<div className="sidebar__recentItem">
			<span className="sidebar__hash">#</span>
			<p>{topic}</p>
		</div>
	);
  return (
		<div className="sidebar">
			<div className="sidebar__top">
				<img className="sidebar__avatar" src={coverPhoto} alt="" />
				<Avatar className="sidebar__avatar" />
				<h4>Shariar Shakhawat</h4>
				<h6>shahriar.shakhawat@gmail.com</h6>
			</div>
			<div className="sidebar__stats">
				<div className="sidebar__stat">
					<p>Who viewed you</p>
					<p className="sidebar__statNumber">1,112</p>
				</div>
				<div className="sidebar__stat">
					<p>Views on post</p>
					<p className="sidebar__statNumber">3,112</p>
				</div>
			</div>
			<div className="sidebar__bottom">
				<p>Recents</p>
				{recentItems("reactJS")}
				{recentItems("VanillaJS")}
				{recentItems("programming")}
				{recentItems("codehero")}
			</div>
		</div>
	);
}

export default Sidebar;
