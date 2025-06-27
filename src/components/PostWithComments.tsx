'use client';

import { useEffect, useState } from 'react';
import { Post, Comment } from '@/types';

type Props = {
  id: string;
};

export default function PostWithComments({ id }: Props) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const commentsRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);

      const postData = await postRes.json();
      const commentsData = await commentsRes.json();

      setPost(postData);
      setComments(commentsData);
      setLoading(false);
    }

    fetchData();
  }, [id]);

  if (loading) return <div className="p-4 text-center">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post?.title}</h1>
      <p className="text-gray-700 mb-6">{post?.body}</p>

      <h2 className="text-xl font-semibold mb-2">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border border-gray-300 p-3 rounded">
            <p className="text-sm font-bold">{comment.name}</p>
            <p className="text-sm">{comment.body}</p>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <a href="/posts" className="text-blue-600 hover:underline">
          ← Back to Posts
        </a>
      </div>
    </div>
  );
}