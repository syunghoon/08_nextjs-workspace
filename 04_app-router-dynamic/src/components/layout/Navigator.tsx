import Link from "next/link";

export default function Navigator() {
  return (
    <nav className="bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <ul className="flex gap-6 py-3">
          <li>
            <Link href="/">홈</Link>
          </li>
          <li>
            <Link href="/about">소개</Link>
          </li>
          <li>
            <Link href="/mypage">마이페이지</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
