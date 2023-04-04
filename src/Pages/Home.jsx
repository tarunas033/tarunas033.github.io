import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import cv from '../Images/Taruna_sharma_resume.pdf';
import resume from '../Images/resume.png';

export default function Home() {
  return (
    <div id='home'>
      <div id='homeContainer'>
        <div>
          <img src="https://avatars.githubusercontent.com/u/107467490?v=4" alt="" />
        </div>
        <div id='homeText'>
          <h2>Hi There!</h2>
          <h1><span className='name1'>I am Taruna Sharma</span></h1>
          <div id='typewriter'>
            <Typewriter
              loop
              cursor
              cursorStyle="|"
              typeSpeed={100}
              deleteSpeed={100}
              delaySpeed={1000}
              words={["Web Developer.", "Full Stack Web Developer.", "MERN Stack Developer"]}
            />
          </div>
          <div style={{gap: '10px',
              display:'flex', 
              justifyContent:'center', 
              alignItems:'center'}}>
            <img width='35px' height='35px' src={resume} alt="resume logo" />
            <h2>
             <a className='name1'
              style={{ textDecoration: "none", color: "#ff3d00" }}
              href={cv}
              download="Taruna_sharma_Resume"
              onClick={()=>window.open("https://drive.google.com/file/d/1Brdh_LiyzYyv_ueo_VZN76CM8FX5RY2v/view?usp=share_link")}
            >
              Resume
            </a>
            
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}