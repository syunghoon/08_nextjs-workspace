interface PostDetailPageProps {
  params: { id: string };
}

export default async function PostDetailPage({ params }: PostDetailPageProps) {
  //props === {}

  const { id } = await params;
  return <div>{id}</div>;
}
