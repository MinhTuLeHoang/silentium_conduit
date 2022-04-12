import React from "react";
import { Link } from "react-router-dom";

import CommentList from "./CommentList";

import Comment from "./Comment";

const CommentContainer = (props) => {
    if(props.currentUser){
        return (
            <div className="col-xs-12 col-md-8 offset-md-2">
                Comment
            </div>
        );
    }
    else{
        return(
            <div className="col-xs-12 col-md-8 offset-md-2">
                <p>
                    <Link to="/login">Sign in</Link>
                    &nbsp; or &nbsp;
                    <Link to="/register">sign Up</Link>
                    &nbsp; to add comments on this article.
                </p>

                {/* <Comment /> */}
                <CommentList comments={[
                    {author:"Hoai Thuong", content:"This is Hoai Thuong's comment", date:"02/14/2022", slug:"123"},
                    {author:"Hoai Thuong clone", content:"Here is comment", date:"October 14, 2007", slug:"124"}
                    ]}/>
            </div>
        );
    }
}


export default React.memo(CommentContainer)