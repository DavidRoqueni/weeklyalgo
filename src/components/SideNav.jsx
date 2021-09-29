import React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useHistory } from 'react-router';

const SideNav = ({ toggle: toggleDrawer }) => {
  let history = useHistory();
  const [arrayOpen, setArrayOpen] = useState(false);
  const handleArrayClick = () => setArrayOpen(!arrayOpen);
  const [linkedListOpen, setLinkedListOpen] = useState(false);
  const handleLinkedListClick = () => setLinkedListOpen(!linkedListOpen);
  return (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={handleArrayClick}>
          <ListItemText primary='Array' />
          {arrayOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={arrayOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                history.push('nonrepeat');
                toggleDrawer(false);
              }}
            >
              <ListItemText primary='First Nonrepeating' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItem button onClick={handleLinkedListClick}>
          <ListItemText primary='Linked List' />
          {linkedListOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={linkedListOpen} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{ pl: 4 }}
              onClick={() => {
                history.push('addtwo');
                toggleDrawer(false);
              }}
            >
              <ListItemText primary='Add Two Numbers' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
      </List>
    </Box>
  );
};

export default SideNav;
