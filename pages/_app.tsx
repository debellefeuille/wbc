import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Box } from '@mui/system';
import { SxProps } from '@mui/system';
import { Mail, MoveToInbox } from '@mui/icons-material';
import AppTopBar from '../components/AppTopBar';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const [menuStatus, setMenuStatus] = React.useState(true);
  const sxBar:SxProps = { width: 250 };

  return (
    <React.Fragment>
      <AppTopBar></AppTopBar>
      <Drawer
        anchor="left"
        open={menuStatus}
      >
        <Box
          sx={{width:250}}
          role="presentation"
        >
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Mail />
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        
      </Drawer>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp
