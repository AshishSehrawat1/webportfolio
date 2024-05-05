import React from 'react'
import './Projects.css'
//import Spin from 'react-reveal/Spin';
const Projects = () => {
  return (
   <>
   <div className="container project" >
   <h2 className=" col-12 mt-3 mb-1 text-center text-uppercase">Top recent projects</h2>
    <hr/>
    <p className='pb-3 text-center'  id="projects">👉 Here are my top 3 projects in live codes  
    </p>
    <div className="row" id="ads">
        
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Full Stack</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk_WOVuCRbR8MiM8KFvvF3-wFYbN5dY4neg&usqp=CAU" alt="project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">React</span>
                    <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center ">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Shopping website
                        </h5>
                    </div>
                    <a className="ad-btn" href="#">
                        View
                    </a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Mobile App</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk_WOVuCRbR8MiM8KFvvF3-wFYbN5dY4neg&usqp=CAU" alt="project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">React Native</span>
                    <span className="card-detail-badge">IOS / ANDROID</span>
                   
                </div>
                <div className="card-body text-center ">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Coding App
                        </h5>
                    </div>
                    <a className="ad-btn" href="View">
                        View
                    </a>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="card rounded">
                <div className="card-image">
                    <span className="card-notify-badge">Backend</span>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk_WOVuCRbR8MiM8KFvvF3-wFYbN5dY4neg&usqp=CAU" alt="project1"/>
                </div>
                <div className="card-image-overly m-auto mt-3">
                    <span className="card-detail-badge">Node</span>
                    <span className="card-detail-badge">Express</span>
                    <span className="card-detail-badge">NoSQL</span>
                    
                </div>
                <div className="card-body text-center ">
                    <div className="ad-title m-auto">
                        <h5 className="text-uppercase">Job Portal
                        </h5>
                    </div>
                    <a className="ad-btn" href="#">
                        View
                    </a>
                </div>
            </div>
        </div>
        
    </div>
   </div>
   </>
  )
}

export default Projects