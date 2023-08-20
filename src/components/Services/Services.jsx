import React from 'react'
import './Services.css';
import resume from './resume.pdf'
import  Card from '../Card/Card'
import HeartEmoji from '../../img/heartemoji.png'
import Humble from '../../img/humble.png';
import Glasses from '../../img/glasses.png'
const Services = () => {
  return (
         <div className="services">

              <div className="awesome">
                <span> My Amazing </span>
                <span>SERVICES</span>
                <span>
                Developing a wide range  of web and mobile applications <br/>
                using Node.js, React, Express,MongoDB,React-native And Firebase
                </span>
                <a href={resume} download>
                <button className="button s-button">RESUME</button>
                </a>
                <div className="blur s-blur" style = {{background:'#ABF1FF94'}}></div>
              </div>

             
 
             <div className="cards">
                  <div style={{left:'14rem'}}>
                  <Card
            emoji={HeartEmoji}
            heading={"MOBILE APP DEVELOPMENT"}
            detail={"React-Native , Figma, Expo Go"}
          />
                  </div>

                  <div style={{top:'12rem',left:'-4rem'}}>
                  <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
                  </div>

                  <div style={{top:'19rem',left:'12rem'}}>
                  <Card
            emoji={Humble}
            heading={"PROJECT DEVELOPMENT"}
            detail={
              " REAL TIME PROJECTS"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
                  </div>
                  <div className="blur s-blur2" style={{background:"lightgreen"}}></div>
             </div>
           
         </div>
  )
}

export default Services