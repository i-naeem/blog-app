export default async function Home() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return (
    <section>
      {posts.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
    </section>
  );
}
