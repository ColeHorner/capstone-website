import React from 'react'
import CapData from './CapData'

class TypeQuestion extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: '', answered: false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    console.log('A name was submitted: ' + this.state.value);
    event.preventDefault();
    if(this.state.value.toLowerCase().trim() === this.props.correct.toLowerCase().trim()){
      alert("Correct!")
    }
    else{
      alert("The actual answer is " + this.props.correct)
    }
  }

  render() {
    return (
      <div>
        <p className = "country">What is the capital of {this.props.country}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
export default TypeQuestion
