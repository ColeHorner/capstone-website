import React from "react"
import Question from './Question'
import CapData from './CapData'
import TypeQuestion from './TypeQuestion'

class ContinentButton extends React.Component{

  constructor(){
    super()
    this.state = {current: null}
    this.handleClickReset = this.handleClickReset.bind(this)
    this.handleClick = this.handleClick.bind(this)

  }
  handleClick(e){
    if(this.state.current === e.target.name){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: e.target.name})
    }
  }
  handleClickReset(){
    this.setState(prevState => {
        return {
            current: "reset"
        }
    })
  }
  //method to get a given number of items out of CapData
  selRandom(numToSel){
    const len = CapData.length
    var vals = []
    var nums = []
    for(let i = 0; i< numToSel;){
      var pos = Math.floor(Math.random() * len)
      if(!nums.includes(pos)){
        vals[i] = CapData[pos]
        nums[i] = pos
        i++
      }
    }
    return vals
  }

  render(){
    //put all this in that thing that renders only at start IDK if this actually works
    var filtered = this.selRandom(10);
    var gobble = []
    if(this.state.current != null){
      filtered = CapData.filter(caps => (
      caps.continent === this.state.current) )}
    if(this.props.page === "page1"){
       gobble = filtered.map(cap =>
          <Question key = {cap.country} country={cap.country} given={cap.given}
          continent = {cap.continent} tf = {cap.tf} capital = {cap.capital}/>)
    }
    if(this.props.page === "page2"){
     gobble = filtered.map(cap =>
        <TypeQuestion key = {cap.country} country={cap.country} given={cap.given}
        continent = {cap.continent} tf = {cap.tf} capital = {cap.capital}/>)
      }
    //this is bad code. I'm sure there is a better way than this, I just don't know it
    if(this.state.current === "reset"){
      this.setState({current: null})
    }
    return(
      <div>
        <button className = "contButton" onClick ={this.handleClick} name = "Europe">Europe</button>
        <button className = "contButton" onClick ={this.handleClick} name = "Asia">Asia</button>
        <button className = "contButton" onClick ={this.handleClick} name = "Africa">Africa</button>
        <button className = "contButton" onClick ={this.handleClick} name = "North America">North America</button>
        <br />
        <button className = "contButton" onClick ={this.handleClick} name = "South America">South America</button>
        <button className = "contButton" onClick ={this.handleClick} name = "Oceania">Oceania</button>
        <button className = "contButton" onClick ={this.handleClickReset}>Reset</button>
        {gobble}
      </div>
    )
  }
}

export default ContinentButton
