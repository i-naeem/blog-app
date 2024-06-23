import PostExcerpt from '@/components/PostExcerpt';
import { Grid } from '@mui/material';

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
};

export default async function Home() {
  let posts = await getPosts();
  return (
    <Grid container spacing={1}>
      {posts.map(post => (
        <Grid item sm={12} md={6} lg={4} xl={4}>
          <PostExcerpt key={post.id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}
