import './App.css';
import React from 'react';
import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import SideNav from './components/SideNav';
import AddTwoNumbers from './pages/LinkedList/AddTwoNumbers';
import FirstNonrepeat from './pages/Arrays/FirstNonrepeat';

export default function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ab47bc',
      },
      secondary: {
        main: '#ff4081',
      },
      background: {
        paper: 'rgba(66,66,66)',
        default: 'rgba(48,48,48)',
      },
    },
    spacing: 8,
  });
  const [openDraw, setOpenDraw] = useState(false);
  const toggleDraw = (e) => {
    setOpenDraw(e);
  };
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ flexGrow: 1, marginBottom: '20px' }}>
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ mr: 2 }}
                onClick={() => {
                  setOpenDraw(true);
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant='h6'
                component='div'
                sx={{ cursor: 'pointer' }}
                onClick={() => {
                  window.location.href = '/home';
                }}
              >
                Weekly Algo
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <CssBaseline />
        <AppBar />
        <Drawer
          anchor={'left'}
          open={openDraw}
          onClose={() => setOpenDraw(false)}
        >
          <SideNav toggle={toggleDraw} />
        </Drawer>
        <Switch>
          <Route path='/nonrepeat'>
            <FirstNonrepeat />
          </Route>
          <Route path='/addtwo'>
            <AddTwoNumbers />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}
