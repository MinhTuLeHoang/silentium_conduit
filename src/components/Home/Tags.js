import React from "react";

function Tags(){
    return (
        <div className="col-md-3">
            <div className="sidebar">
                <strong>Popular Tags</strong>
                <div className="tag-list">
                    <button type="button" className="tag-default tag-pill">welcome</button>
                    <button type="button" className="tag-default tag-pill">implementations</button>
                    <button type="button" className="tag-default tag-pill">introduction</button>
                    <button type="button" className="tag-default tag-pill">codebaseShow</button>
                </div>
            </div>
        </div>
    );
}

export default React.memo(Tags)