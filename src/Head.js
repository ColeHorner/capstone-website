import React from 'react'

class Head extends React.Component{
  render(){
    return(
      <div>
        <h1>Geography Quiz!</h1>
        <h3>Do the countries match the capitals?</h3>
        <p className = "createdBy">Created by Tim Haynes and Cole Horner <br />
        https://github.com/ColeHorner/capstone-website </p>
      </div>
    )
  }
}

export default Head
