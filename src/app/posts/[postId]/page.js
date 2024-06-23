import { Box, Paper, Typography } from '@mui/material';

export const generateMetadata = async ({ params }) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await response.json();

  return {
    title: post.title,
    description: post.body.slice(0, 30),
  };
};

export default async function Post({ params }) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`);
  const post = await response.json();

  return (
    <Box padding='10px'>
      <Typography variant='h2'>{post.title}</Typography>
      <Box as={Paper} marginY={3} height={390} elevation={0} backgroundColor='aliceblue' />
      <Typography variant='body1'>{post.body}</Typography>
    </Box>
  );
}
