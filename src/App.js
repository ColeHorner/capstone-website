import React from 'react'
import Capital from './Capital'
import CapData from './CapData'

/*
function MyApp(){
  const gobble = CapData.map(props => <Capital key = {props.country} country={props.country} capital={props.capital} />)
  //const gobblegobble = gobble.filter(function(cap){
  //  return {cap.continent} === "France"})

  return (
      <div>
          {gobble}
      </div>
    )
  } */

class MyApp extends React.Component {

  render(){
    const gobble = CapData.map(cap =>
    <Capital key = {cap.country} country={cap.country} capital={cap.capital} continent = {cap.continent} tf = {cap.tf}/>)
    return(
      <div style = {{backgroundColor: "#eeeeff"}}>
        <h1>Geography Quiz!</h1>
        <h3>Do the countries match the capitals?</h3>
        {gobble}
        <img className = "picture1" src = "https://www.aoc.gov/sites/default/files/styles/artwork-node/public/images/buildings/6080137063_3e6c91ee8b_o.jpg?itok=GLfzbhdq"/>
        <img className = "picture2"
        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ministros_de_justicia_y_trabajo_asistir%C3%A1n_hoy_martes_a_comisiones_del_Congreso_%287009084169%29.jpg/1024px-Ministros_de_justicia_y_trabajo_asistir%C3%A1n_hoy_martes_a_comisiones_del_Congreso_%287009084169%29.jpg" />
        <img className = "picture3"
        src = "https://i2.wp.com/whatsanswer.com/wp-content/uploads/2017/12/What-Is-The-National-Parliament-Building-of-Egypt.jpg?w=628&ssl=1" />
      </div>
    )
  }
}

export default MyApp
