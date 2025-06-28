import PostWithComments from '@/components/PostWithComments';

export default async function PostDetailPage({ params }: { params: { id: string } }) {
  const { id } = params; // This is now safe
  return <PostWithComments id={id} />;
}