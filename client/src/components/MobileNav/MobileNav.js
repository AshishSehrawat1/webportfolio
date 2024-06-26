import React,{useState} from 'react';
import './MobileNav.css' 
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineMenuFold} from 'react-icons/ai';
import { Link } from 'react-scroll';
import { FcAbout, FcBiotech, FcBusinessContact, FcHome, FcPortraitMode, FcReadingEbook, FcVideoProjector, FcVoicePresentation } from 'react-icons/fc';

const MobileNav = () => {
    const  [open,setOpen]= useState(false)

    // handle open
    const handleOpen=()=> {
        setOpen(!open);
    }

    // handle menu clicks

    const hanleMenuClick =()=>{
        setOpen(false);
    }
  return (
    <>
    <div className="mobile-nav">
        <div className="mobile-nav-header">
            {open? (<AiOutlineMenuFold size={30} className="mobile-nav-icon" onClick={handleOpen}/>)
            :(<GiHamburgerMenu size={30} className="mobile-nav-icon" onClick={handleOpen}/>)}

<spam className="mobile-nav-title">My portfolio app</spam>
        </div>
        {open && (
            <div className="mobile-nav-menu">
        <div className="nav-items">
      <div className="nav-item">
        <div className="nav-link">
          <Link to="home"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcHome/>
          Home
          </Link>
         
        </div>
        <div className="nav-link">
          <Link to="about"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcAbout/>
          About

          </Link>
          
        </div>
        <div className="nav-link">
          <Link to="education"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcReadingEbook/>
          Education
          </Link>
          
        </div>
        
        <div className="nav-link">
          <Link to="techstack"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcBiotech/>
          Tech Stack
          </Link>
         
        </div>
        
        <div className="nav-link">
          <Link to="projects"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcVideoProjector/>
          Projects
          </Link>
          
        </div>
        <div className="nav-link">
          <Link to="workexp"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcPortraitMode/>
          Work Experience
          </Link>
          
        </div>
        <div className="nav-link">
          <Link to="contact"  spy={true} smooth={true} offset={-100} duration={100} onClick={hanleMenuClick}>
          <FcBusinessContact/>
          Contact
          </Link>
          
        </div>
      </div>
    </div>
        </div>

        )}
        
    </div>
    </>
  )
}

export default MobileNav