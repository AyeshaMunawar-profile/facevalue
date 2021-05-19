import React, {Component} from "react";

class Scroll extends Component {
    render(props) {
        return (
            <>
                <div className="scrollable ma3-m ma5-l ma2-ns" style={{
                    overflowY: 'scroll',
                    border: '10px solid #fbf1a9',
                    height: '50rem',
                    borderRadius: '20px'
                }}>
                    {props.children}
                </div>
            </>
        )
    }
}

export default Scroll