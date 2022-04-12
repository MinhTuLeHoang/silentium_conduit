import React from "react";
import Comment from "./Comment";

const CommentList = (props) => {
    return (
        props.comments.map( comment => {
            console.log("abc")
            return(
                <Comment key={comment.slug} comment={comment}/>
            )
        })
    )
}

export default React.memo(CommentList)