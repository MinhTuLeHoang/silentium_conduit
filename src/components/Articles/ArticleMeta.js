import React from "react";
import { Link } from "react-router-dom";

function ArticleMeta(){
    return(
        <div className="article-meta">
            <Link to={"/article"}>
                <img src="logo512.png" alt="temp" />
            </Link>
            
            <div className="info">
                <Link to={"/article"}>Minh Tu</Link>
                <span className="date">Jan 20th</span>
            </div>

            <button className="btn btn-sm btn-outline-secondary">
                <i className="ion-plus-round"></i> Follow Minh Tus <span className="counter">(10)</span>
            </button>

            &nbsp;

            <button className="btn btn-sm btn-outline-primary">
                <i className="ion-heart"></i> Favorite Post <span className="counter">(13)</span>
            </button>
        </div>
    );
}


export default React.memo(ArticleMeta)