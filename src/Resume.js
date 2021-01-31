import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import './Resume.css'



class Resume extends Component {
   
    
    render() {
        const {el,phone, city, address,email, role,about,
            skill1, skill2,skill3, skill4, skill5,skill6, companyName1,
            companyName2,position1, position2, end1, end2,des1,des2,start1, start2,schoolName, startDate, endDate, marks} = this.props;
        return (
            <div className="root">
                <Paper elevation={3}>
                    <div className="header">
                        <h1 className="name">{el}</h1>
                        <h1 className="role"> {role} </h1>
                        <ul>
                            <li>{address}</li>
                            <li>{city}</li>
                            <li> {phone} </li>
                            <li>{email}</li>
                        </ul>
                    </div>
                    <div className="hr">
                        <hr/>
                    </div>
                   <div className="about">
                       <h1>About Me</h1>
                       <pre className="about-text"> {about} </pre>
                   </div>
                   <div className="hr">
                        <hr/>
                    </div>
                    <div className="skills">
                        <h1>Skills</h1>
                        <ul className="skill-ul">
                            <li className="skill-li">{skill1}</li>
                            <li className="skill-li">{skill2}</li>
                            <li className="skill-li">{skill3}</li>
                            <li className="skill-li">{skill4}</li>
                            <li className="skill-li">{skill5}</li>
                            <li className="skill-li">{skill6}</li>
                        </ul>

                    </div>
                    <div className="hr">
                        <hr/>
                    </div>
                   <div className="experience">
                       <h1>experience</h1>
                       <ul>
                           <li className="cap"><b>Company Name:</b> {companyName1}</li>
                           <li className="cap">Position: {position1}</li>
                           <li className="cap">Start: {start1}       End:{end1} </li>
                           <li className="cap">Description:<em> {des1} </em></li>
                       </ul>
                      {companyName2 
                      ? 
                      <ul>
                           <li className="cap"><b>Company Name:</b> {companyName2}</li>
                           <li className="cap">Position: {position2} </li>
                           <li className="cap">Start: {start2}      End:  {end2}</li>
                           <li className="cap">Description:<em> {des2} </em></li>
                       </ul>
                      :null}

                   </div>
                   <div className="hr">
                        <hr/>
                    </div>
                    <div className="education">
                        <h1>Education</h1>
                        <ul>
                            <li className="cap">School Name:{schoolName} </li>
                            <li>Marks: {marks} </li>
                            <li> Start Date: {startDate} </li>
                            <li> End Date:{endDate} </li>
                        </ul>
                    </div>
                    <div className="hr">
                        <hr/>
                    </div>
                    
                </Paper>
            </div>
        )
    }
}

export default Resume
