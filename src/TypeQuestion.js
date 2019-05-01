import React from 'react'
import CapData from './CapData'

class TypeQuestion extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '', answered: null}

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.colorChange = this.colorChange.bind(this)
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(this.state.value.toLowerCase().trim() === this.props.correct.toLowerCase().trim()){
      alert("Correct!")
      this.setState({answered: true})
    }
    else{
      alert("The actual answer is " + this.props.correct)
      this.setState({answered: false})
    }
  }

  colorChange(){
    var color = null;
    if(this.state.answered === true){
      color = "#00ff00"
    }
    if(this.state.answered === false){
      color = "#ff0000"
    }
    return color
  }

  render() {
    return (
      <div>
        <p className = "country">What is the capital of {this.props.country}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input style = {{backgroundColor: this.colorChange()}} type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default TypeQuestion
