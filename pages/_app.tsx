import '../styles/globals.css';
import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import AppTopBar from '../components/appStructure/AppTopBar'
import AppLeftBar from '../components/appStructure/AppLeftBar'
import { Box, CssBaseline, Toolbar } from '@mui/material';
import Link from 'next/link';

function MyApp({ Component, pageProps }: AppProps) {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppTopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AppLeftBar menuOpen={menuOpen} />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Component {...pageProps} />
      </Box>
    </Box>
  );
}

export default MyApp
