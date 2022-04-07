import React from "react";
import ArticlePreview from "./ArticlePreview";

function ArticleList(props){
    if(!props.articles){
        return(
            <div className="article-preview">Loading . . .</div>
        );
    }
    else if(props.articles.length === 0){
        return(
            <div className="article-preview">There are no articles at current</div>
        );
    }
    else {
        return (
            <div>
                {
                props.articles.map(index => {
                    return(<ArticlePreview articles={index} key={index.description}/>);
                })
                }
            </div>
        );
    }
}

export default React.memo(ArticleList)