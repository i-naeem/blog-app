import PostExcerpt from '@/components/PostExcerpt';
import { Box, Card, CardHeader, Grid, Paper, Typography } from '@mui/material';

export default function Home() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Grid container spacing={1}>
      {posts.map((p, i) => (
        <Grid item lg={4} xl={3}>
          <PostExcerpt key={p} first={i == 0} />
        </Grid>
      ))}
    </Grid>
  );
}
