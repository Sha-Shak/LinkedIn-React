import ArticleIcon from "@mui/icons-material/Article";
import CreateIcon from "@mui/icons-material/Create";
import EventIcon from "@mui/icons-material/Event";
import ImageIcon from "@mui/icons-material/Image";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import firebase from "firebase/compat/app";
import React, { useEffect, useState } from 'react';
import './Feed.css';
import { db } from "./firebase";
import InputOption from "./InputOption";
import Posts from './Posts';

function Feed() {
	const [input , setInput]=useState("");
	const [posts, setPosts] = useState([]);

	useEffect(()=>{
		db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => 
			setPosts(
				snapshot.docs.map(doc=>(
				{
					id: doc.id,
					data:doc.data(),
				}
			)))
		) 
	}, []);
	const sendFun = (e) => {
		e.preventDefault();
		//alert(input)
		 db.collection("posts").add({
				name: "Shariar Shakhawat",
				description: "Software Engineer at Bithut Limited",
				message: input,
				photoUrl: "",
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
		 setInput("");
	}
  return (
		<div className="feed">
			<div className="feed__inputContainer">  
				<div className="feed__inputBox">
					<CreateIcon />
					<form action="">
						<input type="text" value={input } onChange={e =>{setInput(e.target.value)}} name="" id="statusField" />
						<button onClick ={sendFun}>Send</button>
					</form>
				</div>
				<div className="feed__inputOptions">
					<InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
					<InputOption Icon={OndemandVideoIcon} title="Video" color="#7fc15e" />
					<InputOption Icon={EventIcon} title="Event" color="#fc9295" />
					<InputOption
						Icon={ArticleIcon}
						title="Write Article"
						color="#70b5f9"
					/>
				</div>
			</div>
			<div className="feed__posts">
		{	posts.map(({id, data:{name, description, message, photoUrl}})=> (
				<Posts
					key={id}
					name={name}
					message={message}
					description={description}
					photoUrl={photoUrl}
				/>
		))}
				<Posts name="Shariar Shakhawat" description="Software Engineer at Bithut Limited" message="Loving React already"/>
			</div>

		</div>
	);
}

export default Feed;
