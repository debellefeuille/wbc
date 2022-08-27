import * as React from 'react';
import { Box, Drawer, Link, Toolbar, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import {Home as HomeIcon, AccountBalance as ConventionIcon, Extension as GameIcon, Person as PlayerIcon, CalendarMonth as ScheduleIcon} from '@mui/icons-material';

const drawerWidth = 250;

interface AppLeftBarProps {
  menuOpen: boolean
}

const menuItems: [string, JSX.Element, string][] = [
  ['Home', <HomeIcon />, '/'],
  ['Conventions', <ConventionIcon />, '/conventions'],
  ['Games', <GameIcon />, '/games'],
  ['Players', <PlayerIcon />, 'players'],
  ['Schedule', <ScheduleIcon />, '/schedule']
]

const AppLeftBar = (menuOpen: AppLeftBarProps) => (
  <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        display: {menuOpen} ? 'block' : { lg: 'block', xs: 'none' },
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          {menuItems.map(([linkText, LinkIcon, linkUrl]) => (
            <Link underline='none' color="inherit" href={linkUrl}>
              <ListItem key={linkText} disablePadding >
                <ListItemButton>
                  <ListItemIcon>
                    {LinkIcon}
                  </ListItemIcon>
                  <ListItemText primary={linkText} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Box>
    </Drawer>
)

export default AppLeftBar;