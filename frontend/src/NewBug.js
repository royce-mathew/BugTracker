import React, { Component, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function NewBug() {

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

    return (
        <>
            <center>
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
        </>
    )
}