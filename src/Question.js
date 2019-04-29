import React from 'react'

class Question extends React.Component{
  constructor(){
    super()
    this.state = {answer: null, clicked: null}
    this.handleClickTrue = this.handleClickTrue.bind(this)
    this.handleClickFalse = this.handleClickFalse.bind(this)
  }

  handleClickTrue(){
    var trueFalse = this.props.tf
    if(this.state.answer === null){
      trueFalse ? this.setState({answer: true}) : this.setState({answer: false})
      this.setState({clicked: true})
    }
  }

  handleClickFalse(){
    var trueFalse = this.props.tf
    if(this.state.answer === null){
      trueFalse ? this.setState({answer: false}) : this.setState({answer: true})
      this.setState({clicked: false})
    }
  }

  colorChange1(){
    let color = "#0000ff"
    if((this.state.answer === true) && (this.state.clicked === true)){
      color = "#00ff00"
    }
    if((this.state.answer === false) && (this.state.clicked === true)){
      color = "#ff0000"
    }
    return color
  }

  colorChange2(){
    let color = "#0000ff"
    if((this.state.answer === true) && (this.state.clicked === false)){
      color = "#00ff00"
    }
    if((this.state.answer === false) && (this.state.clicked === false)){
      color = "#ff0000"
    }
    return color
  }

  render(){
    return(
      <div>
        <p className = "country">{this.props.capital} --> {this.props.country}</p>
        <button style =
          {{backgroundColor : this.colorChange1()}}
          className = "button" onClick={this.handleClickTrue}>True</button>
          <span>  </span>
        <button style =
        {{backgroundColor : this.colorChange2()}}
          className = "button" onClick={this.handleClickFalse}>False</button>
        {this.props.correct != null && (this.state.answer != null &&
          <span className = "country"> The capital of {this.props.country} is {this.props.correct}.</span>)}
        <hr  style = {{width: "200px", marginLeft:"0px"}}/>
      </div>
    )
  }
}

export default Question
