import React, { Component } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { ListItemButton, ListItemText } from "@mui/material";

class Main extends Component {
  render() {
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
                        <ListItemText primary="Bug Logs" />
                    </ListItemButton>

                    <ListItemButton>
                        <ListItemText primary="About" />
                    </ListItemButton>

                    </List>
                </Drawer>
                    <Toolbar />


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
            </center>
        </>
    );
  }
}
 
export default Main;