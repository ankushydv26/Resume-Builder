import React from 'react'
import "./paper.css"


 const Paper = () => {
    return (
      <div className='cv-main'>
       <div className="container" style={{blockSize:'A4', backgroundColor:'#fff', }}>
           <div className="resume">
                <div className="heading" style={{textAlign:'center',color:'black'}}>
                  <h1> Name.NAme</h1>
                </div>
                <div className="info">
                  <div className="about-me">
                    <h1>About me</h1>
                  </div>
                  <div className="Education">
                    <h1>Education</h1>
                  </div>
                  <div className="expreenci">
                    <h1>Experience</h1>
                  </div>
                </div>
           </div>
       </div>
       </div>
    )
}

export default Paper;
