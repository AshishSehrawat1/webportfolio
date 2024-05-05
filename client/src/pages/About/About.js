import React from 'react'
import './About.css'
import Jump from 'react-reveal/Jump';
const About = () => {
  return (
   <>
   <Jump>
    <div className='about'>
        <div className='row'  >
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img" id="about">
            <img src='https://i.ibb.co/nRMhjsq/mypic.jpg" alt="mypic" border="0"' alt="profile_pic" 
            />
            </div>
            <div className="col-md-6  col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores recusandae obcaecati dolorem et asperiores illo suscipit tempora quibusdam nesciunt, facere ali deleniti tempore quibusdam hic ipsam optio, iure ducimus, quam dolor provident, corporis doloribus facere molestias distinctio dignissimos laboriosam. Similique  Cumque cupiditate harum ex, sequi excepturi doloribus voluptatibus eos, dolorem unde temporibus dicta nihil reiciendis amet ullam aspernatur et quos rerum, a itaque repudiandae tempore neque. Aliquid labore officiis repellendus cumque numquam eveniet deleniti nobis soluta unde deserunt tempora, doloremque eum necessitatibus accusamus quas? Voluptatum, placeat optio. Eaque distinctio corporis nam aliquid quae optio minima porro saepe at odio, aliquam reprehenderit vero!</p>
            </div>
        </div>
    </div>
    </Jump>
   </>
  )
}

export default About;