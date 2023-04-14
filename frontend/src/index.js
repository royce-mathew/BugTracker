import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./Main";

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
 
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

ReactDOM.render( 
<React.StrictMode>
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Main />, 
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
