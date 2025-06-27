'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import type { Post } from '@/types';

export default function PostsList() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
 // Fetch the post data from API when component mounts or id changes
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error('Failed to fetch');
        const data: Post[] = await res.json();
        setPosts(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
// Show loading  while fetching
  if (loading) return <p className="text-center py-4">Loading posts...</p>;
  if (error) return <p className="text-center text-red-600 py-4">Error loading posts.</p>;
  // Render the post details
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">All Blog Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 bg-white rounded shadow hover:shadow-lg transition">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}