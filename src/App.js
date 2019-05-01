import React from 'react'
import ContinentButton from './ContinentButton'
import Head from './Head'
import PageOne from './PageOne'
import PageTwo from './PageTwo'

import {BrowserRouter, Route} from 'react-router-dom'

class MyApp extends React.Component {
  render(){
    return(
      <BrowserRouter>
        <div style = {{backgroundColor: "#eeeeff"}}>
          <Head />
          <Route path = "/PageOne" component = {PageOne} />
          <Route path = "/PageTwo" component = {PageTwo} />
        </div>
      </BrowserRouter>
    )
  }
}

export default MyApp
