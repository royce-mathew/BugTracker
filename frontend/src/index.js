import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Main from "./Main";
import './index.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
 
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      100: "#0E0E0E",
      200: "#014c75",
      300: "#012a41",
      400: "#150025",
      500: "#35005d",
    },
  },
});

ReactDOM.render( 
<React.StrictMode>
    <Router>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
          <Main />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
