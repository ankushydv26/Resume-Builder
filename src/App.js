import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./Home"
import Cvapp from './Map'
import ResumeContextProvider from "./Context/ResumeContext"

const App = () => {
  return (
    <div className="app">
      <ResumeContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/app" component={Cvapp} />
          </Switch>
        </BrowserRouter>
        {/* <Right /> */}
      </ResumeContextProvider>
    </div>
  )
}

export default App
