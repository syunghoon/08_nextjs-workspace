interface PostSearchPageProps {
  searchParams: { condition: string; keyword: string };
}

export default async function SearchPage({
  searchParams,
}: PostSearchPageProps) {
  const { condition, keyword } = await searchParams;

  // 리액트 기존 방식 (2차 플젝에서)
  // const [seaerchParams] = useSearchParams();
  // const condition = seaerchParams.get("condition")
  // 이후 데이터 페칭

  // next.js 방식 - props의 searchParams 꺼내서 await 풀기

  return (
    <div>
      <h1>검색 페이지</h1>
      <p>{condition}</p>
      <p>{keyword}</p>
    </div>
  );
}
