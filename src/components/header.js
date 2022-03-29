import React from "react";
import { Link } from "react-router-dom"

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
                    <Link to="/account" className="nav-link">
                        <img src="https://static.productionready.io/images/smiley-cyrus.jpg" className="user-pic"/>
                        Thuong
                    </Link>
                </li>
            </ul>
        );
    }
    return null;
})

const Header = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <Link to="/" className="navbar-brand">
                    Conduit
                </Link>

                <LoggedOutView currentUser={null} />
                <LoggedInView currentUser={null} />
            </div>

        </nav>
    )
}

export default React.memo(Header)