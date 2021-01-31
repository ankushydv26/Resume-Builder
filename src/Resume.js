import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper';
import './Resume.css'



class Resume extends Component {
   
    
    render() {
        const {el,phone, city, address,email, role,about} = this.props;
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
                   {/* <div className="exp">
                       <h1>Exp</h1>

                   </div> */}
                </Paper>
            </div>
        )
    }
}

export default Resume
