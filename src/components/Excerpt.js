import { Box, Button, Card, CardActions, CardContent, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Excerpt({ post }) {
  return (
    <Card sx={{ marginBottom: '5px' }} variant='outlined'>
      <CardContent>
        <Stack sx={{ marginBottom: '6px' }}>
          <Typography title={post.title} fontSize='24px' overflow='clip' fontWeight='600' textTransform='capitalize'>
            {post.title}
          </Typography>
          <Typography>
            by{' '}
            <Box as='span' fontWeight='500' color='GrayText'>
              Author
            </Box>
          </Typography>
        </Stack>
        <Box
          as={Paper}
          variant='outlined'
          sx={{
            height: '360px',
            background: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750)',
            backgroundSize: 'cover',
            marginBottom: '6px',
          }}
        ></Box>
        <Typography variant='body1' sx={{ display: 'inline-block' }}>
          {post.body} <Link href={`/posts/${post.id}`}>more...</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
