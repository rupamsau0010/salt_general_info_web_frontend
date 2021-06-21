import React from "react";
import img1 from "../images/4563775.jpg";
import { Link } from "react-router-dom";
import Modal from "./Modal"



export default function Indivisual() {
  return (
    <div className="allThree Indivisual" id="Indivisual">
      <div className="row ">
        <div className="col-md-6 col-sm-6 allThreeImg">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6 col-sm-6 allThreeHeader" >
          <h4>For Individuals</h4>
          <p>
            
          Sign up and get access to early bird offers. Be a part of our ecosystem and showcase it to your
           friends. Click below to know more.
           
          </p>
          <Link>
            {/* <Button className="button">Join Us</Button> */}
            <Modal text="indivisual" />
          </Link>
        </div>
      </div>
    </div>
  );
}
