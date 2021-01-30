import React from 'react'
import {Grid,} from "@material-ui/core"
import "./style/app.css"
import Paper from "./Component/output/Paper"
import Header from "./Component/input/Header"



const App = () => {
  return (
    <>
    <div className="cv-app">
    <Grid m={2} container spacing={3} style={{height:'100vh', width: '90%'}}>
      <Grid item lg={8} style={{backgroundColor:'gray'}}>
        <Paper/>
      </Grid>
      <Grid item lg={4}>
        <Header/>
      </Grid>
    </Grid>
    </div>
    </>
  )
}

export default App

