import React from 'react'
import ArticleList from './Home/ArticleList'
import { Link } from 'react-router-dom'

const EditProfileSettings = React.memo(props => {
    if (props.isUser) {
        return (
            <Link to="/settings" className="btn btn-sm btn-outline-secondary action-btn">
                <i className="ion-gear-a"></i> Edit Profile Settings
            </Link>
        )
    }
    return null
})

const FollowUserButton = React.memo(props => {
    if (props.isUser) {
        return null
    }

    let classes = 'btn btn-sm action-btn'
    if (props.user.following) {
        classes += ' btn-secondary'
    } else {
        classes += ' btn-outline-secondary'
    }

    const handleClick = e => {
        e.preventDefault()
        if (props.user.following) {
            props.unfollow(props.user.username)
        } else {
            props.follow(props.user.username)
        }
    }

    return (
        <button className={classes} onClick={handleClick}>
            <i className='icon-plus-round'></i>
            &nbsp;
            {props.user.following ? 'Unfollow' : 'Follow'} {props.user.username}
        </button>
    )
})

const RenderTabs = () => {
    return (
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <Link
              className="nav-link active"
              to={`/`}>
              My Articles
            </Link>
          </li>
  
          <li className="nav-item">
            <Link
              className="nav-link"
              to={`/`}>
              Favorited Articles
            </Link>
          </li>
        </ul>
      );
}

const Profile = () => {
    const isUser = true
    
  return (
    <div className="profile-page">

        <div className="user-info">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-md-10 offset-md-1">

                <img src='https://static.productionready.io/images/smiley-cyrus.jpg' className="user-img" />
                <h4>Thuong</h4>
                <p>Something special</p>

                <EditProfileSettings isUser={true} />
                <FollowUserButton
                  isUser={isUser}
                  user={"abc"}
                  follow={true}
                  unfollow={false}
                  />

              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">

            <div className="col-xs-12 col-md-10 offset-md-1">

              <div className="articles-toggle">
                <RenderTabs />
              </div>

              <ArticleList
                articles={[{author:{username:"minh tu"}, img_name:"QN.jpg", favorite:true, date:"November 13, 2019", favoritesCount:13, title:"Luv my angle", description:"One of my most important thing in my whole world !!!"}]} />
            </div>

          </div>
        </div>

      </div>
  )
}

export default React.memo(Profile)