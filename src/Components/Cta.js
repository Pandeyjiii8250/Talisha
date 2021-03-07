import React from "react";
import {Link} from "react-router-dom";
import {Button} from "antd";
import "./Cta.css";
import {useAuth} from "./Contex/AuthContex";
function Cta(props){
    const {currentUser} =  useAuth();
    return(
        <div className="cta-container">
            <h1 className="special-head">
                {props.mainHead}
            </h1>
            <p className="special-para">
                {props.smallHead}
            </p>
            {!currentUser &&
            <Link to='/signup'>
            <Button type="primary" className="cta-button-spacing">
                Sign Up
            </Button>
            </Link>
            }
            <Link to="/Shopping"><Button ghost={!currentUser} type={currentUser && "primary"}>
                Start Cart
            </Button>
            </Link>
        </div>
    );
}

export default Cta;