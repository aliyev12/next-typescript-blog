import axios from "axios";
import Link from "next/link";

export interface Props {
  posts: Array<{
    body: string;
    id: number;
    title: string;
    userId: number;
  }>;
}

const Index = ({ posts }: Props) => {
  return (
    <div>
      <h1>Index Page! 😊</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`p/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

Index.getInitialProps = async () => {
  const url: string = "https://jsonplaceholder.typicode.com/posts";
  const res = await axios.get(url);
  return { posts: res.data };
};

export default Index;
