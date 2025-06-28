import PostWithComments from '@/components/PostWithComments';

type Params = {
  params: {
    id: string;
  };
};

export default function PostDetailPage({ params }: Params) {
  return <PostWithComments id={params.id} />;
}