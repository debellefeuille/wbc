import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Box, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ConventionIcon from '@mui/icons-material/AccountBalance';
import GameIcon from '@mui/icons-material/Extension';
import PlayerIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/CalendarMonth';
import Link from 'next/link';

const drawerWidth = 250;

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            WBC - World Boardgame Championship
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Home', 'Conventions', 'Games', 'Players', 'Schedule'].map((text) => (
              <Link href={"/" + (text == 'Home' ? '' : text.toLowerCase() )}>
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {text === 'Home' ? <HomeIcon /> : null}
                      {text === 'Conventions' ? <ConventionIcon /> : null}
                      {text === 'Games' ? <GameIcon /> : null}
                      {text === 'Players' ? <PlayerIcon /> : null}
                      {text === 'Schedule' ? <ScheduleIcon /> : null}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}

export default MyApp
