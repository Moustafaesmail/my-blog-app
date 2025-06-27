
import Link from 'next/link';
import { Post } from '@/types';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return (
    <Link href={`/posts/${post.id}`} className="block bg-white p-4 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold mb-2 text-black">{post.title}</h2>
      <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
    </Link>
  );
}