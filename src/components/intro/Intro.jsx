import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import vector1 from '../../img/Vector1.png'
import vector2  from '../../img/Vector2.png'
import thumbs from '../../img/thumbup.png'
import glass from '../../img/glassesimoji.png'
import crown from '../../img/crown.png'
import boy from '../../img/boy.png'
import Float from '../Floatdiv/Float';
const Intro = () => {
  return (
  <div className="intro">
      <div className="i-left ">
        <div className="i-name">
            <span>Hi! I Am </span>
            <span>Uday Kiran</span>
            <span>
             A full-stack web developer with expertise in MERN stack,I have a deep
             understanding of React Native's architecture and can write high-performance code
             that runs smoothly on both iOS and Android
            </span>
        </div>

        <button className="button i-button">Hire me</button>

        <div className="i-icons">
           <a href='https://github.com/uday1508/uday1508'> <img src={Github} alt="" /> </a>
           <a href='https://www.linkedin.com/in/uday-kiran-4aaa9a254/'> <img src={LinkedIn} alt="" /></a>
           <a href='https://www.facebook.com/udaykiran.gurramu'> <img src={Instagram}alt="" /></a>
        </div>

      </div>
      <div className="i-right">
        
         {/* <img src={vector2} alt="" />  */}
         <img src={boy} alt="" />
        <div style = {{top:'0%',left:'0%'}}>
          <Float image = {crown} txt1="WEB,REACT-NATIVE" txt2="DEVELOPER"/>
        </div>
        <div >
          <Float image = {glass} txt1="COMPETITIVE" txt2="PROGRAMMER"/>
        </div>
      </div>
  </div>
  )
}

export default Intro