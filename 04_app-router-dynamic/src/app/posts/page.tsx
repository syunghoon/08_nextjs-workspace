import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/posts/1">게시글 1</Link>
        </li>
        <li>
          <Link href="/posts/1">게시글 2</Link>
        </li>
      </ul>

      <hr />

      <Link href="/posts/search?condition=title&keyword=안녕">
        검색조건, 키워드 - 검색요청
      </Link>
    </div>
  );
}
