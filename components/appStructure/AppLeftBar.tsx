import * as React from 'react';
import { Box, Drawer, Link, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ConventionIcon from '@mui/icons-material/AccountBalance';
import GameIcon from '@mui/icons-material/Extension';
import PlayerIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/CalendarMonth';

const drawerWidth = 250;

interface AppLeftBarProps {
  menuOpen: boolean
}

export default function AppLeftBar({menuOpen}: AppLeftBarProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: menuOpen ? 'block' : { lg: 'block', xs: 'none' },
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {['Home', 'Conventions', 'Games', 'Players', 'Schedule'].map((text) => (
            <Link underline='none' color="inherit" href={"/" + (text == 'Home' ? '' : text.toLowerCase() )}>
              <ListItem key={text} disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    {text == 'Home' ? <HomeIcon /> : null}
                    {text == 'Conventions' ? <ConventionIcon /> : null}
                    {text == 'Games' ? <GameIcon /> : null}
                    {text == 'Players' ? <PlayerIcon /> : null}
                    {text == 'Schedule' ? <ScheduleIcon /> : null}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}