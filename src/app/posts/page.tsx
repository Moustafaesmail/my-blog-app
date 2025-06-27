

import type { Metadata } from 'next';
import PostsList from '@/components/PostsList';

export const metadata: Metadata = {
  title: 'All Blog Posts',
  description: 'Browse all blog posts fetched from JSONPlaceholder.',
};

export default function PostsPage() {
  return <PostsList />;
}