import React from 'react';
import "./Menus.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc';

const Menus= ({toggle}) =>{
  return (
    <>
    {toggle?  ( 
      <>
      <Zoom>
      <div className="navbar-profile-pic">
      <img src='https://i.ibb.co/nRMhjsq/mypic.jpg" alt="mypic" border="0"' alt="profile pic"/>
    </div>

      </Zoom>
      <Fade left>

      
     
    <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <Link to="home"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcHome/>
          Home
          </Link>
         
        </div>
        <div className="nav-link">
          <Link to="about"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcAbout/>
          About

          </Link>
          
        </div>
        <div className="nav-link">
          <Link to="education"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcReadingEbook/>
          Education
          </Link>
          
        </div>
        
        <div className="nav-link">
          <Link to="techstack"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcBiotech/>
          Tech Stack
          </Link>
         
        </div>
        
        <div className="nav-link">
          <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcVideoProjector/>
          Projects
          </Link>
          
        </div>
        <div className="nav-link">
          <Link to="workexp"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcPortraitMode/>
          Work Experience
          </Link>
          
        </div>
        <div className="nav-link">
          <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcBusinessContact/>
          Contact
          </Link>
          
        </div>
      </div>
    </div>
    </Fade >
    </>
    ) : (
      <>
      <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
        <Link to="home"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcHome title="Home"/>
          
          </Link>
          
        </div>
        <div className="nav-link">
        <Link to="about"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcAbout title="About"/>
          

          </Link>
          
        </div>
        <div className="nav-link">
        <Link to="education"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcReadingEbook title="Education"/>
          
          </Link>
        
        <div className="nav-link">
        <Link to="techstack"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcBiotech title="Tech Stack"/>
        
          </Link>
          
        </div>
        <div className="nav-link">
        <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcVideoProjector title="Projects"/>
          
          </Link>
          
        </div>
          
        </div>
        <div className="nav-link">
        <Link to="workexp"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcPortraitMode title="Work Experience"/>
          
          </Link>
        
        </div>
        
       
        <div className="nav-link">
        <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100}>
          <FcBusinessContact title="Contact"/>
          
          </Link>
          
        </div>
      </div>
    </div>
      </>
    )}
   
    </>
  );
};

export default Menus;