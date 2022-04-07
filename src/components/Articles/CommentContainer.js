import React from "react";
import { Link } from "react-router-dom";

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
                
            </div>
        );
    }
}


export default React.memo(CommentContainer)