import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import InfoIcon from "@mui/icons-material/Info";
import React from 'react';
import './Widgets.css';

function Widgets() {
    const newsArticle =(heading, subtitle)=>{ return (
        <div className="widgets__article">
					<div className="widgets__articleLeft">
						<FiberManualRecordIcon />
					</div>
					<div className="widgets__articleRight">
						<h4>{heading}</h4>
						<h4>{subtitle}</h4>
					</div>
				</div>);
    }
  return (
		<div className="widgets">
			<div className="widgets__header">
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle("Tesla is DOOMED", "Top news 9M Readers")}
			{newsArticle("Microsoft acquired Activision ", "Top news 19M Readers")}
			{newsArticle("Tesla is DOOMED", "Top news 9M Readers")}
		</div>
	);
}

export default Widgets;
