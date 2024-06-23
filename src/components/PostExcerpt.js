import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Box } from '@mui/material';
import Link from 'next/link';

export default function PostExcerpt(props) {
  return (
    <Card square>
      <CardMedia
        sx={{ height: 180 }}
        image='https://picsum.photos/seed/680/390'
        title='green iguana'
      />

      <CardContent>
        <Box display='flex'>
          <Typography fontSize='14px' color='text.secondary'>
            by{' '}
            <Box as='span' fontWeight='bold' color='primary'>
              adjective
            </Box>
          </Typography>
        </Box>
        <Typography gutterBottom variant='h5' component='div'>
          Lizard
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
          across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Box display='flex' flexGrow='1' justifyContent='end'>
          <Link href={`/posts/${props.postId}`} passHref>
            <Button variant='text' size='small'>
              Read more...
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
}
