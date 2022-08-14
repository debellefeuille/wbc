import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Typography } from '@mui/material';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Typography variant="h1" component="h2">
        h1. Heading
      </Typography>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp
