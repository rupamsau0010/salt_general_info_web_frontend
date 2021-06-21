import React from 'react'
// import img1 from "../images/4563775.jpg";
import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

export default function Intern(){
    return (
        <div className="intern" id="intern">

            

            <div className="row">
                <div className="col-md-12">
                    <h1>JOIN THE TEAM</h1>
                    <p>
                    The new business imperative, we are recruiting,  developing and building team in our workforce.
            </p>
            <HashLink to="/application" target="_blank"><button className="button">JOIN US</button></HashLink>

                </div>
                {/* <div className="col-md-6"> */}
                    {/* <img src={img1} alt=""/> */}
                {/* </div> */}
            </div>
        </div>
    )
}