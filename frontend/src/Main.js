import React, { Component } from "react";

// Dropdown menu to select users from

// Textbox for user to enter description of bug
function textBox() {
    return (
        <TextField 
            type="text"
            value={this.state.value}
            onChange={this.handleChange('desc')}
            margin="normal"
        />
    )
}


// Submit, and send payload to backend for parsing
function SubmitButton() {
    return (
        <button>Submit</button>
    )
}
 
class Main extends Component {
  render() {
    return (
        <div>
            <h1>Bug Tracker</h1>
            <select>
                <option value="user1">User 1</option>
                <option value="user1">User 2</option>
                <option value="user1">User 3</option>
            </select>
            <br></br>
            <SubmitButton/>
        </div>
    );
  }
}
 
export default Main;