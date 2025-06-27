import PostWithComments from '@/components/PostWithComments';

// ✅ Correct prop type for a server component with dynamic route param
type Props = {
  params: { id: string };
};

export default function PostDetailPage({ params }: Props) {
  return <PostWithComments id={params.id} />;
}