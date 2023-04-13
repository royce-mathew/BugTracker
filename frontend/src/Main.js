import React, { Component, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { ListItemButton, ListItemText } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';

import BugLogs from "./BugLogs";
import About from "./About";
import NewBug from "./NewBug";

function Main() {

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

                <Routes>
                    <Route path="/new-bug" element={<NewBug />} />
                    <Route path="/bug-logs" element={<BugLogs />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </center>
        </>

    );
}

export default Main;