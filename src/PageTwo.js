import React from 'react'
import TypeQuestion from './TypeQuestion'
import ContinentButton from './ContinentButton'

class PageTwo extends React.Component{
  render(){
    return(
        <div style = {{backgroundColor: "#eeeeff"}}>
          <ContinentButton page = "page2" />
        </div>
    )
  }
}

export default PageTwo
