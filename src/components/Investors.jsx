import React from "react";
import img1 from "../images/6143.jpg";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Investors() {
  return (
    <div className="allThree Investors" id="Investors">
      <div className="row ">

        <div className="col-md-6 allThreeImg hide">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6 allThreeHeader">
          <h4>For Investors</h4>
          <p>
          We focus on changing the future of local businesses and customers.
           Your funds shall work as a catalyst of this change we aim to achieve. 
           Join us and be a part of this movement. Click below to know more.

                                 
          </p>
          <Link>
            <Modal text="investors" />
          </Link>
        </div>
        <div className="col-md-6 allThreeImg hidenext">
          <img src={img1} alt="" />
        </div>
      </div>
    </div>
  );
}
