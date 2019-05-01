import React from 'react'
import ContinentButton from './ContinentButton'

class PageOne extends React.Component {
  render(){
    return(
        <div style = {{backgroundColor: "#eeeeff"}}>
          <ContinentButton page = "page1" />
        </div>
    )
  }
}

export default PageOne
