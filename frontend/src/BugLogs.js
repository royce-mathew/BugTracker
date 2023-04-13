import React, { Component, useEffect, useState } from "react";
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { ListItem, ListItemText } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh'

export default function BugLogs() {
  const [bugs, setBugs] = useState([]);

  const getBugs = (event) => {
    if (event) {event.preventDefault();}

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
        setBugs(updatedBugs);
      })
      .catch(error => console.error(error))
  };

  useEffect(() => {
    getBugs()
  }, []); // Empty dependency array means function only runs once on amount

  return (
    <div>
      <h1>Bug Logs</h1>
      <Box sx={{ width: "80%", maxWidth: 360, bgcolor: 'background.paper' }}>
        <List href="#bugs-list">
          {bugs.map((bug) => (
            <>
              <Divider variant="inset" component="li" />
              <ListItem key={bug.id} alignItems="flex-start">
                <ListItemText primary={bug.name || "Undefined Name"} secondary={`ID: ${bug.unique_id}`} />
              </ListItem>
            </>
          ))}
        </List>
      </Box>
      <Button variant="contained" onClick={getBugs} startIcon={<RefreshIcon />}>Refresh</Button>
    </div>
  )
}

// export default BugLogs;
