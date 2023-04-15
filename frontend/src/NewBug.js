import React, { Component, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


export default function NewBug() {

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');

    const sendData = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:5000/bugs/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({title: title, description: description, user: user}),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    };

    return (
        <>
            <Box className="newBug">
                {/* <div style= {{ marginTop: '-70px', marginRight: '-180px'}}>
                </div> */}
                <Box className="newBugContainer" sx={{backgroundColor: "primary.100"}}>
                    <h1 className="newBugTitle"> Report A Bug </h1>

                    <TextField
                        id="user"
                        placeholder="Team member"
                        variant="filled"
                        className="newBugInput"
                        value={user}
                        required
                        onChange={(event) => setUser(event.target.value)}
                    />


                    <TextField
                        id="bug-title"
                        placeholder="What is the bug?"
                        variant="filled"
                        className="newBugInput"
                        value={title}
                        required
                        onChange={(event) => setTitle(event.target.value)}
                    />
                    

                    {/* text box */}
                    <TextField
                        id="bug-description"
                        placeholder="Enter a short description of the bug..."
                        multiline
                        rows={4}
                        variant="filled"
                        className="newBugInput"
                        value={description}
                        required
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    {/* submit button */}
                    <Button variant="contained" onClick={sendData} size="large" sx={{width: '70%'}}>Submit</Button>
                </Box>
            </Box>
        </>
    )
}