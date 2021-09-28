import './App.css';
import React from 'react';
import useState from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Week38 from './pages/2021/Week38';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  AppBar,
  CssBaseline,
  Toolbar,
  Typography,
  Box,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

//TODO: https://mui.com/components/drawers/
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
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <CssBaseline />
      <AppBar />
      <Router>
        <Switch>
          <Route path='/2021/nov20-26'>
            <Week38 />
          </Route>
          <Route path='*'>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}
