import React from "react";
import { Link } from "react-router-dom";


const ArticlePreview = (props) => {
    // console.log(props)
    return(
        <div className="article-preview">
            <div className="article-meta">
                <Link to="/article/${props.article.slug}">
                    {/* <img src="public/logo512.png" alt={props.articles.username} /> */}
                    <img src={props.articles.img_name} alt="props.articles.author.username" />
                </Link>

                <div className="info">
                    <Link to="/article" className="author">
                        {props.articles.author.username}
                    </Link>
                    <span className="date">{new Date(props.articles.date).toDateString()}</span>
                </div>

                <button className={props.articles.favorite ? 'btn btn-outline-primary btn-sm pull-xs-right ARTICLE_FAVORITED' : 'btn btn-outline-primary btn-sm pull-xs-right ARTICLE_UNFAVORITED'}>
                    <i className="ion-heart"></i> {props.articles.favoritesCount}
                </button>
            </div>

            <Link to="/" className="preview-link">
                <h1>{props.articles.title}</h1>
                <p>{props.articles.description}</p>
                <span>Read more . . .</span>
            </Link>
        </div>
    );
}

export default React.memo(ArticlePreview)