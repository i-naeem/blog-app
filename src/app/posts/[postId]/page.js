import { Box, Card, CardContent, Divider, List, ListItem, Paper, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export const generateMetadata = async (props) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${props.params.postId}`);
  const post = await response.json();

  return {
    title: post.title,
    description: post.description,
  };
};

const getPost = async (postId) => {
  const responses = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`),
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`),
  ]);

  const [posts, comments] = await Promise.all(responses.map((r) => r.json()));

  return { ...posts, comments };
};

export default async function Post(props) {
  const post = await getPost(props.params.postId);

  return (
    <Card as={Box} elevation={0}>
      <CardContent>
        <Typography variant='h4' fontWeight='600' sx={{ marginBottom: '15px', textTransform: 'capitalize' }}>
          {post.title}
        </Typography>
        <Box
          sx={{
            height: '360px',
            background: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750)',
            backgroundSize: 'cover',
            marginBottom: '15px',
          }}
        ></Box>
        <Typography as='p' variant='body1' marginBottom='15px'>
          {post.body}
        </Typography>

        <Typography as='p' variant='body1' marginBottom='15px'>
          Beneath the cerulean sky, where whispers of wind kiss the earth, petals unfurl in delicate dance. Sunlight
          weaves through leaves, painting golden tapestries upon the ground. In this quiet symphony of nature, time
          slows, and hearts find solace.
        </Typography>

        <Box component={Paper} marginBottom='15px'>
          <Table sx={{ minWidth: 650 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align='right'>Calories</TableCell>
                <TableCell align='right'>Fat&nbsp;(g)</TableCell>
                <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
                <TableCell align='right'>Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell component='th' scope='row'>
                    {row.name}
                  </TableCell>
                  <TableCell align='right'>{row.calories}</TableCell>
                  <TableCell align='right'>{row.fat}</TableCell>
                  <TableCell align='right'>{row.carbs}</TableCell>
                  <TableCell align='right'>{row.protein}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>

        <Typography as='p' variant='body1' marginBottom='15px'>
          In the heart of an ancient forest, where sunlight filters through a canopy of emerald leaves, time takes on a
          different rhythm. Moss-clad stones cradle secrets whispered by the wind, and the earth breathes in harmony
          with the seasons. Birds, like notes in an ethereal symphony, flit from branch to branch, their melodies
          echoing through the verdant cathedral. Shafts of golden light pierce the foliage, illuminating dew-kissed
          spiderwebs that glisten like delicate lace. Here, amidst the rustling leaves and the scent of damp earth, one
          can almost touch eternity—a fleeting moment suspended between the past and the promise of tomorrow
        </Typography>

        <Box
          sx={{
            height: '260px',
            background: 'url(https://images.unsplash.com/photo-1512917774080-9991f1c4c750)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            marginBottom: '15px',
          }}
        ></Box>

        <Typography as='p' variant='body1' marginBottom='15px'>
          In the heart of an ancient forest, where sunlight filters through a canopy of emerald leaves, time takes on a
          different rhythm. Moss-clad stones cradle secrets whispered by the wind, and the earth breathes in harmony
          with the seasons. Birds, like notes in an ethereal symphony, flit from branch to branch, their melodies
          echoing through the verdant cathedral. Shafts of golden light pierce the foliage, illuminating dew-kissed
          spiderwebs that glisten like delicate lace. Here, amidst the rustling leaves and the scent of damp earth, one
          can almost touch eternity—a fleeting moment suspended between the past and the promise of tomorrow
        </Typography>

        <Typography as='p' variant='body1' marginBottom='15px'>
          In the heart of an ancient forest, where sunlight filters through a canopy of emerald leaves, time takes on a
          different rhythm. Moss-clad stones cradle secrets whispered by the wind, and the earth breathes in harmony
          with the seasons. Birds, like notes in an ethereal symphony, flit from branch to branch, their melodies
          echoing through the verdant cathedral. Shafts of golden light pierce the foliage, illuminating dew-kissed
          spiderwebs that glisten like delicate lace. Here, amidst the rustling leaves and the scent of damp earth, one
          can almost touch eternity—a fleeting moment suspended between the past and the promise of tomorrow
        </Typography>
      </CardContent>

      <Divider />
    </Card>
  );
}
