import Link from 'next/link';
import Card from '@mui/material/Card';
import { Link as MuLink } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';

export default function PostExcerpt({ post }) {
  return (
    <Card square sx={{ height: '100%' }}>
      <CardMedia
        sx={{ height: 180 }}
        image='https://picsum.photos/seed/680/390'
        title='green iguana'
      />

      <CardContent>
        <Typography title={post.title} gutterBottom variant='h5' component='div'>
          {post.title}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {post.body}{' '}
          <Link href={`/posts/${post.id}`} passHref>
            <MuLink>Read more...</MuLink>
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
