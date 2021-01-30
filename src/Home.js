import React from 'react'
import "./home.css"
import {Button} from '@material-ui/core'
import {Link} from "react-router-dom"

const Card = () => {
    
    return (
        <div className="app">
        <div className='sub-app'>
            <div className="content">
                <h1>Build Resume</h1>
                {/* image  insert*/}
                <h5>Site Open with Desktop</h5>
                 <Button 
                 variant="contained"
                 component={Link}
                 to="/app"
                 color="Green"
                 className="btn-get-started"
                 > Get started</Button>  
            </div>
        </div>
        </div>
    )
}

export default Card
