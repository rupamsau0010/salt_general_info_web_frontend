import React from "react";
import Teamdesc from "./Teamdesc";
import img1 from "../images/1t.jpg";
import img2 from "../images/2t.jpg";
import img3 from "../images/3t.jpg";
import img4 from "../images/4t.jpg";
import img5 from "../images/5t.jpeg";

import info from "../info"


export default function TeamCarousel() {
  return (

    <div id="teams" class="teams">
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade  carousel-dark TeamCarousel"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 4"></button>

        </div>

        <div class="carousel-inner">
          <div class="carousel-item active" >
            <Teamdesc img={img1} desc={info[0].desc} name={info[0].name} pos={info[0].pos}/>
          </div>

          <div class="carousel-item " data-bs-interval="3000">
            <Teamdesc img={img2} desc={info[1].desc} name={info[1].name} pos={info[1].pos} />
          </div>
          
          <div class="carousel-item ">
            <Teamdesc img={img3}  desc={info[2].desc} name={info[2].name} pos={info[2].pos}/>
          </div>

          <div class="carousel-item "data-bs-interval="3000" >
            <Teamdesc img={img4}  desc={info[3].desc} name={info[3].name} pos={info[3].pos} />
          </div>

          <div class="carousel-item ">
            <Teamdesc img={img5}  desc={info[4].desc} name={info[4].name} pos={info[4].pos} />
          </div>

        </div>

      </div>
    </div>
  );
}
