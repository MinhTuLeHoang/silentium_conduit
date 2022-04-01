import React from "react";
import "./Banner.css";

function Banner(){
    return (
        <div className="banner">
            <div className="container">
                <h1 className="logo-front">Conduit</h1>
                <p>A place to share your knowledge</p>
            </div>
        </div>
    );
}

export default React.memo(Banner);