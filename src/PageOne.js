import React from 'react'
import ContinentButton from './ContinentButton'

class PageOne extends React.Component {
  render(){
    return(
        <div>
          <h3>Is the given city the capital of the paired country?</h3>
          <ContinentButton page = "page1" />
        </div>
    )
  }
}

export default PageOne
