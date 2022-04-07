import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { LOGOUT } from "../constants/actionTypes";

const LoggedOutView = React.memo(props => {
    if (!props.currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Sign in
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Sign up
                    </Link>
                </li>
            </ul>
        );
    }
    return null;
});

const LoggedInView = React.memo(props => {
    if (props.currentUser) {
        return (
            <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/editor" className="nav-link">
                        <i className="ion-compose"></i>&nbsp;New Post
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to="/setting" className="nav-link">
                        <i className="ion-gear-a"></i>&nbsp;Settings
                    </Link>
                </li>

                <li className="nav-item">
                    <Link to={`/@${props.currentUser.username}`} className="nav-link">
                        <img src={props.currentUser.image || "https://static.productionready.io/images/smiley-cyrus.jpg"} className="user-pic" alt={props.currentUser.username}/>
                        {props.currentUser.username}
                    </Link>
                </li>
            </ul>
        );
    }
    return null;
})

const Header = (props) => {
    const dispatch = useDispatch()

    const onClickLogout = () => {
        dispatch({
            type: LOGOUT
        })
    }
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    {props.appName.toLowerCase()}
                </Link>

                <LoggedOutView currentUser={props.currentUser} />
                <LoggedInView currentUser={props.currentUser} />
                <button className='btn btn-outline-danger' onClick={onClickLogout}>
                    Logout.
                </button>
            </div>

        </nav>
    )
}

export default React.memo(Header)