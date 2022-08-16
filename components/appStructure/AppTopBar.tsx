import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuOpenIcon from '@mui/icons-material/Menu';
import MenuCloseIcon from '@mui/icons-material/MenuOpen';

interface AppTopBarProps {
  menuOpen: boolean;
  setMenuOpen: (openMenu: boolean) => void;
}

export default function AppTopBar({menuOpen, setMenuOpen}: AppTopBarProps) {
  function handleDrawerOpen() {
    setMenuOpen(!menuOpen);
  }

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, display: { lg: 'none', xs: 'block' } }}
        >
          { menuOpen ? <MenuCloseIcon /> : <MenuOpenIcon /> }
        </IconButton>

        <Typography variant="h6" noWrap component="div">
          WBC - World Boardgame Championship
        </Typography>
      </Toolbar>
    </AppBar>
  );
}