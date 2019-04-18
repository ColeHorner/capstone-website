import React from "react"
import Capital from './Capital'
import CapData from './CapData'

class ContinentButton extends React.Component{

  constructor(){
    super()
    this.state = {current: null}
    this.handleClickAsia = this.handleClickAsia.bind(this)
    this.handleClickAfrica = this.handleClickAfrica.bind(this)
    this.handleClickNorthAmerica = this.handleClickNorthAmerica.bind(this)
    this.handleClickSouthAmerica = this.handleClickSouthAmerica.bind(this)
    this.handleClickOceania = this.handleClickOceania.bind(this)
  }

  handleClickAsia(){
    this.setState({current: "Asia"})
  }
  handleClickAfrica(){
    this.setState({current: "Africa"})
  }
  handleClickNorthAmerica(){
      this.setState({current: "North America"})
  }
  handleClickSouthAmerica(){
        this.setState({current: "South America"})
  }
  handleClickOceania(){
          this.setState({current: "Oceania"})
  }
  render(){
    const filtered = CapData.filter(caps => (
      caps.continent === this.state.current) )

    const gobble = filtered.map(cap =>
        <Capital key = {cap.country} country={cap.country} capital={cap.capital}
        continent = {cap.continent} tf = {cap.tf}/>)

    return(
      <div>
        <button className = "contButton" onClick ={this.handleClickAsia}>Asia</button>
        <button className = "contButton" onClick ={this.handleClickAfrica}>Africa</button>
        <button className = "contButton" onClick ={this.handleClickNorthAmerica}>North America</button>
        <button className = "contButton" onClick ={this.handleClickSouthAmerica}>South America</button>
        <button className = "contButton" onClick ={this.handleClickOceania}>Oceania</button>

        {gobble}
      </div>
    )
  }
}

export default ContinentButton
