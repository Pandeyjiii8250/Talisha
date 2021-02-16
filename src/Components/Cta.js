import React from "react";
import {Button} from "antd";
import "./Cta.css";
function Cta(props){
    return(
        <div className="cta-container">
            <h1 className="special-head">
                {props.mainHead}
            </h1>
            <p className="special-para">
                {props.smallHead}
            </p>
            <Button type="primary" className="cta-button-spacing">
                Sign Up
            </Button>
            <Button ghost>
                Start Cart
            </Button>
        </div>
    );
}

export default Cta;