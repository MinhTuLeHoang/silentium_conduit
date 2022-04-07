import React from "react";


const Comment = (props) => {
    return(
        <div className="card">
            <div className="card-block">
                <p>Here is a comment line bla bla</p>
                
            </div>
        </div>
    )
}


export default React.memo(Comment)