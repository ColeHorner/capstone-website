import React from 'react'
import ContinentButton from './ContinentButton'
import Head from './Head'

class MyApp extends React.Component {
  render(){
    return(
      <div style = {{backgroundColor: "#eeeeff"}}>
        <Head />
        <ContinentButton />
      </div>
    )
  }
}

export default MyApp
