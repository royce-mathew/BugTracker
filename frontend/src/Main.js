import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

class Main extends Component {
  render() {
    return (
        <>
            <h1>Bug Tracker</h1>
            
            {/* drop down list */}
            <select>
                <option value="user1">User 1</option>
                <option value="user2">User 2</option>
                <option value="user3">User 3</option>
            </select>
            
            <br></br><br></br>

            {/* text box */}
            <TextField
                id="bug-description"
                placeholder="Enter a short description of the bug..."
                multiline
                rows={4}
                variant="filled"
            />
            <br></br><br></br>

            {/* submit button */}
            <Button variant="contained">Submit</Button>
        </>
    );
  }
}
 
export default Main;