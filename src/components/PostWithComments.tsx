'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Post } from '@/types';

export default function PostDetailPage() {
  const { id } = useParams(); // useParams still works fine in client components
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error('Failed to fetch post');
        const data = await res.json();
        setPost(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) return <div className="text-center p-4">Loading post...</div>;
  if (error || !post) return <div className="text-center p-4">Error loading post.</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p className="mb-4 text-gray-700">{post.body}</p>

      <Link href="/posts" className="text-blue-600 hover:underline">
        ← Back to Posts
      </Link>
    </div>
  );
}