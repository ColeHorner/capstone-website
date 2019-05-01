import React from 'react'

class Head extends React.Component{
  render(){
    return(
      <div>
        <h1>Geography Quiz!</h1>
        <h3>Do the countries match the capitals?</h3>
        <p className = "createdBy">Created by Tim Haynes and Cole Horner <br />
        https://github.com/ColeHorner/capstone-website </p>
        <nav>
          <ul>
            <p><a href = "/PageOne">True-False Quiz</a></p> 
            <p><a href = "/PageTwo">Fill in the Blank Quiz</a></p>
          </ul>
        </nav>
        <img className = "picture1" alt = "American Capital"
        src = "https://www.aoc.gov/sites/default/files/styles/artwork-node/public/images/buildings/6080137063_3e6c91ee8b_o.jpg?itok=GLfzbhdq"/>
        <img className = "picture2" alt = "Peruvian Capital"
        src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Ministros_de_justicia_y_trabajo_asistir%C3%A1n_hoy_martes_a_comisiones_del_Congreso_%287009084169%29.jpg/1024px-Ministros_de_justicia_y_trabajo_asistir%C3%A1n_hoy_martes_a_comisiones_del_Congreso_%287009084169%29.jpg" />
        <img className = "picture3" alt = "Egyptian Capital"
        src = "https://i2.wp.com/whatsanswer.com/wp-content/uploads/2017/12/What-Is-The-National-Parliament-Building-of-Egypt.jpg?w=628&ssl=1" />
      </div>
    )
  }
}

export default Head
