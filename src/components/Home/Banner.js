import React from "react";
import "./Banner.css";
import ArticleMeta from "../Articles/ArticleMeta";


function Banner(props){
    return (
        <div className="banner">
                {props.isHome ?
                    <div className="container">
                        <h1 className="logo-front">Conduit</h1>
                        <p>A place to share your knowledge</p>
                    </div>
                : 
                    <div className="container">
                        <h1>{props.article.title}</h1>
                        <ArticleMeta />
                    </div>
                }
        </div>
    );
}

export default React.memo(Banner);