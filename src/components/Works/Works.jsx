import React from 'react'
import './Works.css';
import rn from '../../img/rn.png'
import ht from '../../img/ht.png'
import mern from '../../img/mern.png'
import js from '../../img/js.png';
import css from '../../img/css.png';
import c from '../../img/c.png';
import ml from '../../img/ml.png'
import ds from '../../img/ds.png'
import p5 from '../../img/p5.png'
const Works = () => {
  return (
    <div className="works">
        <div className="awesome"><span>MY</span><span>SKILLS</span></div> 
     <div className="w-right">
     <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
         <div className="w-mainCircle">
            <div className="w-secCircle">
                 <img src={rn} alt="" />
            </div>

            <div className="w-secCircle">
                <img src={js} alt="" />
            </div>

            <div className="w-secCircle">
                <img src={mern} alt="" />
            </div>

            <div className="w-secCircle">
                 <img src={ht} alt="" />
            </div>

            <div className="w-secCircle">
                 <img src={css} alt="" />
            </div>
                
         </div>
     </div>




     <div className="w-right">
         <div className="w-mainCircle">
            <div className="w-secCircle">
                 <img src={p5} alt="" />
            </div>

            <div className="w-secCircle">
                <img src={c} alt="" />
            </div>

            <div className="w-secCircle">
                <img src={ml} alt="" />
            </div>

            <div className="w-secCircle">
                 <img src={ht} alt="" />
            </div>

            <div className="w-secCircle">
                 <img src={ds} alt="" />
            </div>
                
         </div>
         <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
     </div>
     </div>
  )
}

export default Works