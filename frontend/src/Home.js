import React, { Component, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export default function Home(){
    return (
        <Box className = "Home">
            <Box className = "homePageContainer">
                <h1 className="homeTitle"> Welcome To The Bug Tracker </h1>

                <div className="homeContent">
                    <div className="column">
                        <h2>Backend</h2>
                        <h3>{"<Technologies>"}</h3>
                        <p>We used Flask for the backend and used py4j to open sockets to communicate between the Java
                            API.
                        </p>
                    </div>

                    <div className="column">
                        <h2>Frontend</h2>
                        <h3>{"<Technologies>"}</h3>
                        <p>We used ReactApp and MaterialUI to create the frontend. We really enjoyed the
                            functionality and the appearance that MaterialUI had to offer.
                        </p>
                    </div>                    
                </div>

            </Box>
        </Box>
    )
}