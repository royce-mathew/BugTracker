import React, { Component, useEffect, useState } from "react";
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import { Accordion, AccordionDetails, AccordionSummary, ListItem, ListItemText } from "@mui/material"
import RefreshIcon from '@mui/icons-material/Refresh'
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export default function BugLogs() {
  const [bugs, setBugs] = useState([]);
  const [expanded, setExpanded] = useState(false)

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
          title: value["title"],
          username: value["username"],
          description: value["description"]
        }));
        setBugs(updatedBugs);
      })
      .catch(error => console.error(error))
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  }

  useEffect(() => {
    getBugs()
  }, []); // Empty dependency array means function only runs once on amount

  return (
    <center>
    <div className="bugLogContainer">
      <h1>Bug Logs</h1>
      <Button variant="contained" onClick={getBugs} startIcon={<RefreshIcon />}>Refresh</Button>
      <br/><br/>
      
      <Box sx={{ width: "100%", maxWidth: 800, bgcolor: 'background.paper' }}>
      {bugs.map((bug) => (
        <Accordion expanded={expanded === bug.unique_id} onChange={handleChange(bug.unique_id)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            id={bug.id}>
              <Typography sx={{width: '50%', flexShrink: 0}} align="left">
                {bug.title || "Undefined Name"}
              </Typography>
              <Typography sx={{color: 'text.secondary'}}>
                {bug.username || "Undefined Author"}
              </Typography>
            </AccordionSummary>
            <AccordionDetails align="left" sx={{pl : '2rem'}}>
              <Typography sx={{display: 'inline'}} color='text.primary' >
                Unique ID 
              </Typography>
              <Typography sx={{display: 'inline'}} color='text.secondary'>
                :  {bug.unique_id}
              </Typography>
              <br/>

              <Typography sx={{display: 'inline'}} color='text.primary'>
                Description
              </Typography>
              <Typography sx={{display: 'inline'}} color='text.secondary'>
                :  {bug.description}
              </Typography>

            </AccordionDetails>
        </Accordion>
      ))}
      </Box>
    </div>
    </center>
  )
}

// export default BugLogs;
