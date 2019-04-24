import React from "react"
import Capital from './Capital'
import CapData from './CapData'

class ContinentButton extends React.Component{

  constructor(){
    super()
    this.state = {current: null}
    this.handleClickEurope = this.handleClickEurope.bind(this)
    this.handleClickAsia = this.handleClickAsia.bind(this)
    this.handleClickAfrica = this.handleClickAfrica.bind(this)
    this.handleClickNorthAmerica = this.handleClickNorthAmerica.bind(this)
    this.handleClickSouthAmerica = this.handleClickSouthAmerica.bind(this)
    this.handleClickOceania = this.handleClickOceania.bind(this)
    this.handleClickReset = this.handleClickReset.bind(this)
  }
  handleClickEurope(){
    if(this.state.current === "Europe"){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: "Europe"})
    }
  }
  handleClickAsia(){
    if(this.state.current === "Asia"){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: "Asia"})
    }
  }

  handleClickAfrica(){
    if(this.state.current === "Africa"){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: "Africa"})
    }
  }
  handleClickNorthAmerica(){
    if(this.state.current === "North America"){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: "North America"})
    }
  }
  handleClickSouthAmerica(){
    if(this.state.current === "South America"){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: "South America"})
    }
  }
  handleClickOceania(){
    if(this.state.current === "Oceania"){
      this.setState({current: "reset"})
    }
    else{
      this.setState({current: "Oceania"})
    }
  }

  handleClickReset(){
    this.setState(prevState => {
        return {
            current: "reset"
        }
    })
  }

  selRandom(){
    const len = CapData.length
    var vals = []
    var nums = []
    for(let i = 0; i< 10;){
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
    var filtered = this.selRandom();
    if(this.state.current != null){
      filtered = CapData.filter(caps => (
      caps.continent === this.state.current) )}
    const gobble = filtered.map(cap =>
        <Capital key = {cap.country} country={cap.country} capital={cap.capital}
        continent = {cap.continent} tf = {cap.tf} correct = {cap.correct}/>)

    //this is bad code. I'm sure there is a better way than this, I just don't know it
    if(this.state.current === "reset"){
      this.setState({current: null})
    }
    return(
      <div>
        <button className = "contButton" onClick ={this.handleClickEurope}>Europe</button>
        <button className = "contButton" onClick ={this.handleClickAsia}>Asia</button>
        <button className = "contButton" onClick ={this.handleClickAfrica}>Africa</button>
        <button className = "contButton" onClick ={this.handleClickNorthAmerica}>North America</button>
        <br />
        <button className = "contButton" onClick ={this.handleClickSouthAmerica}>South America</button>
        <button className = "contButton" onClick ={this.handleClickOceania}>Oceania</button>
        <button className = "contButton" onClick ={this.handleClickReset}>Reset</button>
        {gobble}
      </div>
    )
  }
}

export default ContinentButton
