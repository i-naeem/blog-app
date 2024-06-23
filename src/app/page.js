import PostExcerpt from '@/components/PostExcerpt';
import { Grid } from '@mui/material';

export default function Home() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Grid container spacing={1}>
      {posts.map(p => (
        <Grid item sm={12} md={6} lg={4} xl={4}>
          <PostExcerpt key={p} postId={p} />
        </Grid>
      ))}
    </Grid>
  );
}
