import React from "react";
import ArticleMeta from "./ArticleMeta";
import Banner from "../Home/Banner";

function Article(){
    return(
        <div className="article-page">
            <Banner isHome={false} article={{title:"my title abc"}}/>
            <ArticleMeta />
        </div>
    );
}


export default React.memo(Article)