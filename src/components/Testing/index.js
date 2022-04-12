import React from "react";
import {useState, useEffect, useRef} from "react";

import Banner from "./../Home/Banner"

let my_count = {num:0}

const ReactRef = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef({num:0});
    

    useEffect(() => {
        my_count.num = my_count.num + 1;
        count.current.num = count.current.num + 1;
        console.log(my_count)
        console.log(count.current)
        console.log("----")
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current.num}</h1>
            <h2>Render Count: {my_count.num}</h2>
        </>
    );
}




const Testing = (props) => {
    return (
        <div className="home-page">
            <Banner isHome={true} />
            <div className="container page">
                <ReactRef />
            </div>
        </div>
    );
}

export default Testing;