import React, { Component, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import { ListItemButton, ListItemText } from "@mui/material";
import BugLogs from "./BugLogs";
import About from "./About";

function Main() {
    const [user, setUser] = useState('user1')
    const [description, setDescription] = useState('');

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


    const renderRouteComponent = () => {
        switch(activeRoute) {
            case 'bug-logs':
                return <BugLogs />
            case 'about':
                return <About />
            default:
                return null;
        }
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

                    <ListItemButton component={Link} to="/new-bug">
                        <ListItemText primary="New Bug" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/bug-logs">
                        <ListItemText primary="Bug Logs" />
                    </ListItemButton>

                    <ListItemButton component={Link} to="/about">
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
                
                <br /><br />

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
                <br /><br />

                {/* submit button */}
                <Button variant="contained" onClick={sendData}>Submit</Button>
            </center>

            <Routes>
                <Route path="/new-bug" element={<div />} />
                <Route path="/bug-logs" element={<BugLogs />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>

    );
}

export default Main;