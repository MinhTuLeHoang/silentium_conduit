import React from "react";
import ArticleMeta from "./ArticleMeta";
import Banner from "../Home/Banner";
import CommentContainer from "./CommentContainer";

function Article(){
    return(
        <div className="article-page">
            <Banner isHome={false} article={{title:"my title abc"}}/>
            
            <div className="container page">
                <div className="row article-content">
                    <div className="col-xs-12">
                        <div>Share your knowledge and enpower the community by creating a new implementation</div>
                        <br/>
                        <ul className="tag-list">
                            <li className="tag-default tag-pill tag-outline">implementations</li>
                        </ul>
                        <ul className="tag-list">
                            <li className="tag-default tag-pill tag-outline">xyz</li>
                        </ul>
                    </div>
                </div>

                <hr/>

                <div className="article-actions">
                    <ArticleMeta />
                </div>

                <div className="row">
                    <CommentContainer />
                </div>

            </div>

        </div>
    );
}


export default React.memo(Article)