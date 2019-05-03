import React from 'react'
import ContinentButton from './ContinentButton'

class PageTwo extends React.Component{
  render(){
    return(
        <div>
          <h3>Fill in the capital of each given country</h3>
          <ContinentButton page = "page2" />
        </div>
    )
  }
}

export default PageTwo
