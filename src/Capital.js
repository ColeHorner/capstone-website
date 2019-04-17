import React from 'react'
//I hope this works
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
    let col = "#0000ff"
    if((this.state.answered === true) && (this.state.clicked === true)){
      col = "#00ff00"
    }
    if((this.state.answered === false) && (this.state.clicked === true)){
      col = "#ff0000"
    }
    return col
  }

  colorChange2(){
    let col = "#0000ff"
    if((this.state.answered === true) && (this.state.clicked === false)){
      col = "#00ff00"
    }
    if((this.state.answered === false) && (this.state.clicked === false)){
      col = "#ff0000"
    }
    return col
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
        <hr  style = {{width: "200px", marginLeft:"0px"}}/>
      </div>
    )
  }
}

export default Capital
