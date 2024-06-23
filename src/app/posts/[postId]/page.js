import { Box, Paper, Typography } from '@mui/material';

export default async function Post({ postId }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = await response.json();

  return (
    <Box padding='10px'>
      <Typography variant='h2'>{post.title}</Typography>
      <Box as={Paper} marginY={3} height={390} elevation={0} backgroundColor='aliceblue' />
      <Typography variant='body1'>{post.body}</Typography>
    </Box>
  );
}
