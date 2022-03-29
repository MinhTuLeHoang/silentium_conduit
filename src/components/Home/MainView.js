import React from "react";

const YourFeedTab = React.memo(props => {
    if(props.token){
        return (
            <li className="nav-item">
                <button className={props.tab === "feed" ? "nav-link active" : "nav-link"}>Your Feed</button>
            </li>
        );
    }
    return null;
})


const GlobalFeedTab = React.memo(props => {
    return (
        <li className="nav-item">
            <button className={props.tab === "all" ? "nav-link active" : "nav-link"}>Global Feed</button>
        </li>
    );
})


function MainView(){
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <YourFeedTab token="1" tab="feed"/>
                    <GlobalFeedTab tab="a"/>
                </ul>
            </div>
        </div>
    );
}


export default React.memo(MainView)