import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { Inter } from 'next/font/google';
import { Box, Grid, Typography } from '@mui/material';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Blog Application Development',
  description: 'Generated by create next app',
};

const border = '1px solid black';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppRouterCacheProvider options={{ key: 'css' }}>
          <Grid container sx={{ '& .MuiGrid-item': { padding: '30px' } }} padding='5px'>
            <Grid item lg={3} sx={{ borderRight: border, borderBottom: border }} />
            <Grid item lg={6} sx={{ borderBottom: border }}></Grid>
            <Grid item lg={3} sx={{ borderLeft: border, borderBottom: border }} />

            <Grid item lg={3} borderRight={border} />
            <Grid item lg={6}>
              {children}
            </Grid>
            <Grid item lg={3} borderLeft={border} />

            <Grid item lg={3} borderTop={border} borderRight={border} />
            <Grid item lg={6} borderTop={border}></Grid>
            <Grid item lg={3} borderTop={border} borderLeft={border} />
          </Grid>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
