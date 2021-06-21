import React from "react";
import img1 from "../images/6685.jpg";
import { Link } from "react-router-dom";
import Modal from "./Modal"


export default function Business() {
  return (
    <div className="allThree Business" id="Business">
      <div className="row ">
        <div className="col-md-6 allThreeImg">
          <img src={img1} alt="" />
        </div>
        <div className="col-md-6 allThreeHeader" >
          <h4>For Businesses</h4>
          <p>
          Come aboard and increase your profits marginally. Scale up your business and reach your dream customer base.
           Signup, showcase your products and start selling. It’s that easy ! Click below to know more
          
          </p>
          <Link>
            {/* <Button className="button">Join Us</Button> */}
            <Modal text="business" />
          </Link>
        </div>
      </div>
    </div>
  );
}
