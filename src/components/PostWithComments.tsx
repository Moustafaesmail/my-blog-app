'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Post = {
  id: number;
  title: string;
  body: string;
};

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

export default function PostWithComments({ id }: { id: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then(setPost);

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then(setComments);
  }, [id]);

  if (!post) return <p className="text-center py-10">Loading post...</p>;

  return (
    <main className="max-w-3xl mx-auto px-4 py-10">
      <motion.h1
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {post.title}
      </motion.h1>

      <motion.p
        className="text-lg text-gray-800 dark:text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {post.body}
      </motion.p>

      <hr className="my-8 border-gray-300 dark:border-gray-600" />

      <h2 className="text-2xl font-semibold mb-4">Comments</h2>
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: comment.id * 0.03 }}
          >
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{comment.name}</p>
            <p className="text-xs text-gray-500 mb-2">{comment.email}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">{comment.body}</p>
          </motion.div>
        ))}
      </div>

      <Link
        href="/posts"
        className="mt-10 inline-block text-blue-600 hover:underline dark:text-blue-400"
      >
        ← Back to Posts
      </Link>
    </main>
  );
}