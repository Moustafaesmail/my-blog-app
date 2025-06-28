import PostWithComments from '@/components/PostWithComments';
import { use } from 'react';

export default function PostDetailPage(props: any) {
  const { id } = use(props.params) as { id: string }; // ✅ explicitly typed

  return <PostWithComments id={id} />;
}