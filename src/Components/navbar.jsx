import React from "react";
import { NavHashLink as Link } from "react-router-hash-link";
import resume from "../Images/resume.png";

export default function Navbar() {
  let handleClick = () => {
    document.querySelector("#headers").classList.toggle("active");
  };

  return (
    <div id="navbar">
      <div>
        <h1 id="name">TARUNA SHARMA</h1>
        <img
          id="img"
          onClick={handleClick}
          src="https://cdn-icons-png.flaticon.com/512/7711/7711100.png"
        />
      </div>
      <div id="headers">
        <div className="icons">
          
          <h2>
            <Link smooth to="#home" className="link">
              Home
            </Link>
          </h2>
        </div>

        <div className="icons">
          
          <h2>
            <Link smooth to="#about" className="link">
              About me
            </Link>
          </h2>
        </div>

        
        <div className="icons">
          
          <h2>
            <Link smooth to="#project" className="link">
              Project
            </Link>
          </h2>
        </div>
         <div className="icons">
         
          <h2>
            <Link smooth to="#skills" className="link">
              Skills
            </Link>
          </h2>
        </div>
         <div className="icons">
         
          <h2>
            <Link smooth to="#contact" className="link">
              Contact
            </Link>
          </h2>
        </div>
          <div className="icons"> 
        <h2>
            <a
              style={{ textDecoration: "none", color: "#ff3d00" }}
              href={resume}
              download="Taruna-Sharma-Resume"
              onClick={()=>window.open("https://drive.google.com/file/d/1Brdh_LiyzYyv_ueo_VZN76CM8FX5RY2v/view?usp=share_link")}
            >
              Resume
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}
