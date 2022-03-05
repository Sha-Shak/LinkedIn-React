import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PeopleIcon from "@mui/icons-material/People";
import SearchIcon from "@mui/icons-material/Search";
import React from 'react';
import "./Header.css";
import HeaderOption from "./HeaderOption";
import logo from "./images/linkedin.png";
import avatar from "./images/user.png";

function Header() {
  return (
		<div className="header">
			<div className="header__left">
				<img className="brand__logo" src={logo} alt="" />
				<div className="header__search">
					<SearchIcon />
					<input type="text" name="" id="" />
				</div>
			</div>
			<div className="header__right">
				<HeaderOption Icon={HomeIcon} title="Home" />
				<HeaderOption Icon={PeopleIcon} title="My Network" />
				<HeaderOption Icon={BusinessCenterIcon} title="Job" />
				<HeaderOption Icon={ChatIcon} title="Messaging" />
				<HeaderOption Icon={NotificationsIcon} title="Notification" />
        		<HeaderOption avatar ={avatar} title="User" />
				
			</div>
		</div>
	);
}

export default Header;
