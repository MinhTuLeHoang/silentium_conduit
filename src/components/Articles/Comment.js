import React from "react";
import { Link } from "react-router-dom";


const Comment = (props) => {
    let comment = props.comment
    return(
        <div className="card">
            <div className="card-block">
                <p className="card-text">{comment.content}</p>
            </div>
            <div className="card-footer">
                <Link to="./articles">
                    <img src="http://i.imgur.com/Qr71crq.jpg" className="comment-author-img"/>
                </Link>
                &nbsp;&nbsp;
                <Link to="./articles">{comment.author}</Link>
                &nbsp;&nbsp;
                <span className="deta-posted">{new Date(comment.date).toDateString()}</span>
            </div>
        </div>
    )
}


export default React.memo(Comment)