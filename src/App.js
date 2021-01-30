import React from 'react'
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Card from "./Card"
import Cvapp from './Map'

const App = () => {
  return (
    <div className="app">
      {/* <ResumeContextProvider> */}
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Card} exact />
            <Route path="/app" component={Cvapp} />
          </Switch>
        </BrowserRouter>
        {/* <Right /> */}
      {/* </ResumeContextProvider> */}
    </div>
  )
}

export default App
