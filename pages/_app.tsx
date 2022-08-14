import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Typography } from '@mui/material';
import AppTopBar from '../components/AppTopBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <AppTopBar></AppTopBar>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
