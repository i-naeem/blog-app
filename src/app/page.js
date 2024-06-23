import { Box, Card, CardHeader, Paper, Typography } from '@mui/material';

export default function Home() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box>
      <Paper square>
        <Card>
          <Typography variant='h1'>Hello World</Typography>
        </Card>
      </Paper>
    </Box>
  );
}
