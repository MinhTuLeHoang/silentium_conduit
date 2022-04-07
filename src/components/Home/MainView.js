import React, {useState, useEffect} from "react";
import ArticleList from "./ArticleList";

const YourFeedTab = React.memo(props => {
    if (props.token) {
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

class ButtonCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 0, comments: "okela" }
    }

    buttonHandling = () => {
        console.log(this.state)
        this.setState({ num: this.state.num + 1 });
    }

    ListItem(props){
        return(
            <li key={props.value.toString()}>{props.value}</li>
        );
    }

    render() {
        let arr = [...Array(this.state.num + 1).keys()].slice(1)
        return (
            <div>
                <ul>
                    {arr.map((x, key) => 
                    // <li key={key}><strong>{x}</strong></li>
                    <this.ListItem value={x}/>
                    )}
                </ul>
                <br />
                <button type="button" onClick={this.buttonHandling}>Click me</button>
            </div>
        )
    }
}


function FunctionalCount(){
    const [count, setMyCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
        console.log(document.title)
    })

    return (
        <div>
            <p>You click {count} times</p>
            <button onClick={() => setMyCount(count + 1)}>Click me</button>
        </div>
    );
}





/////////////////////////////


function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}


function MainView() {
    let count = 0
    return (
        <div className="col-md-9">
            <div className="feed-toggle">
                <ul className="nav nav-pills outline-active">
                    <YourFeedTab token="1" tab="feed" />
                    <GlobalFeedTab tab="a" />
                </ul>
            </div>

            <ArticleList articles={
                [ 
                    {author:{username:"minh tu"}, img_name:"QN.jpg", favorite:true, date:"November 13, 2019", favoritesCount:13, title:"Luv my angle", description:"One of my most important thing in my whole world !!!"}, 
                    {author:{username:"hoai thuong"}, img_name:"logo512.png", favorite:false, date:"May 20, 2002", favoritesCount:1, title:"How to understand alien language", description:"bruh dak lmao haha bla bla bla"},
                    {author:{username:"hoai thuong"}, img_name:"logo512.png", favorite:false, date:"Fed 26, 2003", favoritesCount:0, title:"How to understand alien language (ver2)", description:"ver 2 bruh dak lmao haha bla bla bla"} 
                ]}/>

            <hr/>

            <br/><br/><br/><br/>

            {/* {<p>true</p> && <h2>false</h2>} */}
            
            {false ? <p>true</p> : <p>false</p>}
            <ButtonCount />

            <hr />

            <Page />

            <hr />

            <FunctionalCount />
        </div>
    );
}


export default React.memo(MainView)