import React, { Component, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import { ListItemButton, ListItemText, Typography } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Box from "@mui/material/Box"

import BugLogs from "./BugLogs";
import About from "./About";
import NewBug from "./NewBug";
import Home from "./Home"
import { Margin } from "@mui/icons-material";

const drawerWidth = 200;

function Main() {
    return (
        <>  
            <Box sx={{display: 'flex'}}>
                {/* drawer */}
                <Drawer
                    sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                    }}
                    variant="permanent"
                    anchor="left"
                >
                    <Toolbar sx={{px: "16px !important"}}>
                        <Typography variant="h5" noWrap component="div" color={"lightblue"} >
                            Bug Tracker
                        </Typography>
                    </Toolbar>
                    <Divider />

                    <List>

                    <ListItemButton component={Link} to="/home">
                        <ListItemText primary="Home" />
                    </ListItemButton>

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
            <Box component="main" sx={{flexGrow: 1, p: 0}}>
                <Routes>
                    <Route path="/new-bug" element={<NewBug />} />
                    <Route path="/bug-logs" element={<BugLogs />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </Box>
            </Box>
        </>

    );
}

export default Main;