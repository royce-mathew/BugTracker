import React, { Component, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box"
import ListItem from "@mui/material/ListItem"
import { ListItemButton, ListItemText } from "@mui/material";

function Main() {
    const [user, setUser] = useState('user1')
    const [description, setDescription] = useState('');
    const [bugs, setBugs] = useState([]);

    const sendData = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:5000/bugs/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user, description: description }),
            // credentials: 'include'
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    };

    const getBugs = (event) => {
      event.preventDefault();
      // Remove list of bugs
      
      fetch('http://127.0.0.1:5000/bugs/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(response => response.json())
        .then(data => {

          const updatedBugs = Object.entries(data).map(([key, value]) => ({
              id: bugs.length + 1,
              unique_id: key,
              name: value["name"],
              username: value["username"],
              description: value["description"]
          }));
          setBugs(updatedBugs)
         
          console.log(bugs); 
        })
        .catch(error => console.error(error))
    }

    return (
        <>  
            <center>
                <h1>Bug Tracker</h1>
                
                {/* drawer */}
                <Drawer
                    sx={{
                    width: 200,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 200,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider />
                    <List>

                    <ListItemButton>
                        <ListItemText primary="New Bug" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="Bug Logs" onClick={getBugs} />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="About" />
                    </ListItemButton>

                    </List>
                </Drawer>
                    <Toolbar />


                {/* drop down list */}
                <select  value={user} onChange={(event) => setUser(event.target.value)}>
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
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                />
                <br></br><br></br>

                {/* submit button */}
                <Button variant="contained" onClick={sendData}>Submit</Button>

                <Box sx={{width: "80%", maxWidth: 360, bgcolor: 'background.paper'}}>
                  <List href="#bugs-list">
                    {bugs.map((bug) => (
                      <>
                        <Divider variant="inset" component="li" />
                        <ListItem key={bug.id} alignItems="flex-start">
                          <ListItemText primary={bug.name || "Undefined Name"} secondary={`ID: ${bug.unique_id}`}/>
                        </ListItem>
                      </>
                    ))} 
                  </List>
                </Box>
          </center>
        </>
    );
}

export default Main;
