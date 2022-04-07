import React from "react";
import "./Banner.css";

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
                        <p>This is a description</p>
                    </div>
                }
        </div>
    );
}

export default React.memo(Banner);