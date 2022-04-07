import React from "react";

const CommentList = (props) => {
    props.comments.map( comment => {
        return(
            <p>comment list</p>
        );
    })
}

export default React.memo(CommentList)