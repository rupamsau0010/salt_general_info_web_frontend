import React from "react";
import carouselImg from "../images/about_pc.png";

// import img1 from "../images/profile3 (1).jpg"
// import img2 from "../images/profile3 (2).jpg"
// Import User Images
import img1 from "../images/userImage/userf1.png"
import img2 from "../images/userImage/userf2.png"
import img3 from "../images/userImage/userf3.png"
import img4 from "../images/userImage/userf4.png"
import img5 from "../images/userImage/userf5.png"
import img6 from "../images/userImage/userf6.png"
import img7 from "../images/userImage/userf7.png"
import img8 from "../images/userImage/userf8.png"
import img9 from "../images/userImage/userf9.png"
import img10 from "../images/userImage/userf10.png"
import img11 from "../images/userImage/userf11.png"
import img12 from "../images/userImage/userf12.png"
import img13 from "../images/userImage/userf13.png"
import img14 from "../images/userImage/userf14.png"
import img15 from "../images/userImage/userf15.png"
import img16 from "../images/userImage/userf16.png"
import img17 from "../images/userImage/userf17.png"
import img18 from "../images/userImage/userf18.png"


// import img3 from "../images/women_tshirt_pic.PNG"
import carouselImgMob from "../images/about_mob.png"



export default function About() {
  return (
    <div className="about" id="about">
      <img src={carouselImg} className="img-fluid imgDex" alt="" />
      <img src={carouselImgMob}  className="img-fluid imgmob" alt=""/>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">

        <div class="row carousel-inner">
          <div class="col-md-4 carousel-item active">
            <img src={img1}  alt="..."></img>
            <img src={img2}  alt="..."></img>
            <img src={img3} alt="..."></img>
            <img src={img4} alt="..."></img>
            <img src={img5} alt="..."></img>
            <img src={img6} alt="..."></img>


            
          </div>
          <div class="col-md-4 carousel-item">
            <img src={img7}  alt="..."></img>
            <img src={img8}  alt="..."></img>
            <img src={img9}  alt="..."></img>
            <img src={img10} alt="..."></img>
            <img src={img11} alt="..."></img>
            <img src={img12} alt="..."></img>



          </div>
          <div class="col-md-4 carousel-item">
            <img src={img13}  alt="..."></img>
            <img src={img14}  alt="..."></img>
            <img src={img15} alt="..."></img>
            <img src={img16} alt="..."></img>
            <img src={img17} alt="..."></img>
            <img src={img18} alt="..."></img>




          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
