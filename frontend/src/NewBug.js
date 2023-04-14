import React, { Component, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function NewBug() {

    const [user, setUser] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');

    const sendData = (event) => {
        event.preventDefault();
        fetch('http://127.0.0.1:5000/bugs/create', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user, title: title, description: description }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error))
    };

    return (
        <>
            <center>
                <div style= {{ marginTop: '-70px', marginRight: '-180px'}}>
                    <h1> Fill Out a Bug, and We'll Get Back to You Soon! </h1>
                </div>

                <TextField
                    id="user"
                    placeholder="Team member"
                    variant="filled"
                    value={user}
                    onChange={(event) => setUser(event.target.value)}
                />

                <br /><br />

                <TextField
                    id="bug-title"
                    placeholder="What is the bug?"
                    variant="filled"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                
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
        </>
    )
}