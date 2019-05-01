import React from 'react'
import ReactDOM from 'react-dom'
import ContinentButton from './ContinentButton'
import Head from './Head'

class PageOne extends React.Component {
  render(){
    return(
        <div style = {{backgroundColor: "#eeeeff"}}>
          <ContinentButton />
        </div>
    )
  }
}

export default PageOne
