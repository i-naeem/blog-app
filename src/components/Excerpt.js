import { Box, Button, Card, CardActions, CardContent, Paper, Stack, Typography } from '@mui/material';
import Link from 'next/link';

export default function Excerpt({ post }) {
  return (
    <Card sx={{ marginBottom: '5px' }} variant='outlined'>
      <CardContent>
        <Stack sx={{ marginBottom: '5px' }}>
          <Typography title={post.title} fontSize='28px' overflow='clip' fontWeight='500' textTransform='capitalize'>
            <Link href='/' style={{ textDecoration: 'none', color: 'inherit' }}>
              {post.title}
            </Link>
          </Typography>
          <Typography>
            by{' '}
            <Box as='span' fontWeight='500' color='GrayText'>
              Author
            </Box>
          </Typography>
        </Stack>
        <Box
          borderRadius={1}
          sx={{
            height: '360px',
            background: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750)',
            backgroundSize: 'cover',
            marginBottom: '10px',
          }}
        ></Box>
        <Typography variant='body1' sx={{ display: 'inline-block' }}>
          {post.body} <Link href={`/posts/${post.id}`}>more...</Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
