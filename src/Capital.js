import React from 'react'

class Capital extends React.Component{
  constructor(){
    super()
    this.state = {answered: null, clicked: null}
    this.handleClickTrue = this.handleClickTrue.bind(this)
    this.handleClickFalse = this.handleClickFalse.bind(this)
  }

  handleClickTrue(){
    var trueFalse = this.props.tf
    if(this.state.answered === null){
      trueFalse ? this.setState({answered: true}) : this.setState({answered: false})
      this.setState({clicked: true})
    }
  }

  handleClickFalse(){
    var trueFalse = this.props.tf
    if(this.state.answered === null){
      trueFalse ? this.setState({answered: false}) : this.setState({answered: true})
      this.setState({clicked: false})
    }
  }

  colorChange1(){
    let color = "#0000ff"
    if((this.state.answered === true) && (this.state.clicked === true)){
      color = "#00ff00"
    }
    if((this.state.answered === false) && (this.state.clicked === true)){
      color = "#ff0000"
    }
    return color
  }

  colorChange2(){
    let color = "#0000ff"
    if((this.state.answered === true) && (this.state.clicked === false)){
      color = "#00ff00"
    }
    if((this.state.answered === false) && (this.state.clicked === false)){
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
           {this.state.answered != null && <span className = "country">  {this.props.correct}</span>}
        <hr  style = {{width: "200px", marginLeft:"0px"}}/>
      </div>
    )
  }
}

export default Capital
