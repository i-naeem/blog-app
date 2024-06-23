import PostExcerpt from '@/components/PostExcerpt';
import { Box } from '@mui/material';

export default function Home() {
  let posts = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box display='flex' flexGrow={1} flexDirection='column'>
      {posts.map(p => (
        <PostExcerpt key={p} />
      ))}
    </Box>
  );
}
