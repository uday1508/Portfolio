// import React from 'react'
// import './Portfolio.css'
// import {Swiper,SwiperSlide} from 'swiper/react'

// import p1 from '../../img/p1.png';
// import p2 from '../../img/p2.png';
// import p3 from '../../img/p3.png';
// import p4 from '../../img/p4.png';
// const Portfolio = () => {
//   return (
//     <div className="portfolio" id="portfolio">
//         <span>MY PORTFOLIO</span>
//         <span>RECENT PROJECTS</span>
          
//         <Swiper
//            spaceBetween={30}
//            slidesPerView={4}
//            grabCursor={true}
//            className="portfolio-slider"
//         >
//             <SwiperSlide>
//                 <img src={p1} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src={p2} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src={p3} alt="" />
//             </SwiperSlide>
//             <SwiperSlide>
//                 <img src={p4} alt="" />
//             </SwiperSlide>
//         </Swiper>
        
//     </div>
//   )
// }

// export default Portfolio

import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/p1.png";
import Ecommerce from "../../img/p2.png";
import HOC from "../../img/p3.png";
import MusicApp from "../../img/p4.png";


// import p1 from '../../img/p1.png';
// import p2 from '../../img/p2.png';
// import p3 from '';
// import p4 from '../../img/p4.png';
const Portfolio = () => {
 
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href = "https://chasemazegame.netlify.app/">  <img src={Sidebar} alt="" /> </a>
        <span>click to play</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={HOC} alt="" />
          <span>sort visulazier</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={Ecommerce} alt="" />
          <span>click to play</span>
        </SwiperSlide>

        <SwiperSlide>
          <img src={MusicApp} alt="" />
          <span>AI CHAT BOT</span>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;