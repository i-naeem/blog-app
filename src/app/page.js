import Excerpt from '@/components/Excerpt';

export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <section>
      {posts.map((post) => (
        <Excerpt key={post.id} post={post} />
      ))}
    </section>
  );
}
