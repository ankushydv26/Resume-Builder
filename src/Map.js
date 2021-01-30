import React from 'react'
import {Grid,} from "@material-ui/core"
import "./style/app.css"
import Paper from "./Component/output/Paper"
import Header from "./Component/input/Header"



const App = () => {
  return (
    <>
    <div className="cv-app">
    <Grid m={1} container spacing={2} style={{height:'100vh', width: '90%'}}>
      <Grid item lg={9}  md={9} sm={12}>
        <Paper/>
      </Grid>
      <Grid item lg={3} md={3} sm={12}>
        <Header/>
      </Grid>
    </Grid>
    </div>
    </>
  )
}

export default App

