import React, {useState, useEffect, useRef, useContext} from "react";
import ArticleList from "./ArticleList";
import { ThemeContext } from "../../context/ThemeContext";
import './Banner.css'

function LifecycleDemo(props) {
    // It takes a function
    useEffect(() => {
        console.log("Lifecycle render in FUNC COMPONENT");

        return () => console.log("unmounting in FUNC COMPONENT");
    }, [props.show]);

    return "I'm a lifecycle demo";
}

function Abc() {
    const [random, setRandom] = useState(Math.random());
    const [mounted, setMounted] = useState(true);

    const reRender = () => setRandom(Math.random());
    const toggle = () => setMounted(!mounted);

    return (
        <>
            <button onClick={reRender}>Re-render</button>
            <button onClick={toggle}>Show/Hide LifecycleDemo</button>
            <div>{mounted && <LifecycleDemo show={mounted} />}</div>
        </>
    );
}





/////////////////////////////

const YourFeedTab = React.memo(props => {
    const feedOnClick = () => {
        props.setTab("feed")
    }

    if (props.token) {
        return (
            <li className="nav-item">
                <button onClick={feedOnClick} className={props.tab === "feed" ? "nav-link active" : "nav-link"}>Your Feed</button>
            </li>
        );
    }
    return null;
})



const GlobalFeedTab = React.memo(props => {
    const globalOnClick = () => {
        props.setTab("global")
    }
    return (
        <li className="nav-item">
            <button onClick={globalOnClick} className={props.tab === "global" ? "nav-link active" : "nav-link"}>Global Feed</button>
        </li>
    );
})

const MyTab = React.memo(() => {
    const [tab, setTab] = useState("global")

    return (
        <div className="feed-toggle">
            <ul className="nav nav-pills outline-active">
                <GlobalFeedTab tab={tab} setTab={setTab} />
                <YourFeedTab tab={tab} setTab={setTab} token="1" />
            </ul>
        </div>
    );
})

//////////////////////////////

function TextInputWithFocusButton() {
    const inputEl = useRef(null);
    const onButtonClick = () => {
        // `current` points to the mounted text input element
        inputEl.current.focus();
    };
    return (
        <>
            <input ref={inputEl} type="text" />
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    );
}


class ButtonCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = { num: 0, comments: "okela" }
    }

    componentDidMount() {
        console.log("here we did mout in CLASS COMPONENT")
    }

    componentWillUnmount() {
        console.log("here we un mout in CLASS COMPONENT")
    }

    componentDidUpdate() {
        console.log("here we just update in CLASS COMPONENT")
    }

    buttonHandling = () => {
        // console.log(this.state)
        this.setState({ num: this.state.num + 1 });
    }

    ListItem(props) {
        return (
            // <li key={props.value.toString()}>{props.value}</li>
            <li>{props.value}</li>
        );
    }

    render() {
        let arr = [...Array(this.state.num + 1).keys()].slice(1)
        return (
            <div>
                <button type="button" onClick={this.buttonHandling}>Count me up</button>
                <br />
                <ul>
                    {this.state.num % 2 === 0 && arr.map((x, key) =>
                        <this.ListItem value={x} key={key} />
                    )}
                </ul>
            </div>
        )
    }
}


function FunctionalCount() {
    const [count, setMyCount] = useState(0)
    const [msg, setMsg] = useState("abc")

    useEffect(()=>{
        console.log("FUNC COMPONENT render")
        return () => {console.log("FUNC COMPONENT unmout")}
    })

    return (
        <div>
            <p>You click {count} times</p>
            <strong>{msg}</strong>
            <br />
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

const Page1 = (props) => {
    const [showWarning, setShowWarning] = useState(true)

    const handleToggleClick1 = () => {
        setShowWarning(!showWarning)
    }

    return (
        <div>
            <WarningBanner warn={showWarning} />
            <button onClick={handleToggleClick1}>
                {showWarning ? 'Hide' : 'Show'}
            </button>
        </div>
    );
}

// const 

const TestTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    return (
        <>
            <button onClick={toggleTheme} style={{padding: "0.5rem", backgroundColor: "yellow", borderRadius: "10px", border:"1px solid yellow"}}>Change Theme</button>
            <div className={theme}>abc</div>
        </>
    )
}




function MainView() {
    
    return (
        <div className="col-md-9">
            <MyTab />


            <ArticleList articles={
                [
                    { author: { username: "minh tu" }, img_name: "QN.jpg", favorite: true, date: "November 13, 2019", favoritesCount: 13, title: "Some teaching technique", description: "One of my most important thing !!!", slug: 13 },
                    { author: { username: "hoai thuong" }, img_name: "logo512.png", favorite: false, date: "May 20, 2002", favoritesCount: 1, title: "How to understand alien language", description: "bruh dak lmao haha bla bla bla", slug: 14 },
                    { author: { username: "hoai thuong" }, img_name: "logo512.png", favorite: false, date: "Fed 26, 2003", favoritesCount: 0, title: "How to understand alien language (ver2)", description: "ver 2 bruh dak lmao haha bla bla bla", slug: 16 }
                ]} />

            <hr />

            <br /><br /><br /><br />
            
            <TextInputWithFocusButton />

            {/* {<p>true</p> && <h2>false</h2>} */}

            {false ? <p>true</p> : <p>false</p>}
            <hr />
            <ButtonCount />

            <hr />

            <Page1 />

            <hr />

            <Page />

            <hr />

            <FunctionalCount />

            <hr />

            <TestTheme />
            

            <Abc />



        </div>
    );
}


export default React.memo(MainView)