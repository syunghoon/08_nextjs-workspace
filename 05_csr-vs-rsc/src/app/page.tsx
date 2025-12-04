import CouterButton from "@/components/CounterButton";
import Image from "next/image";

// Home 페이지 컴포넌트 == 서버컴포넌트

export default function Home() {
  console.log('로그의 실행위치는? - 서버')

  // 서버에서 생성된 시간 
  const time = new Date().toLocaleTimeString(); // 서버측에서 실행 

  return (
    <div className="p-20">
      <h1 className="text-3xl font-bold text-gray-900">
        Server Component와 vs Client Component
      </h1>
      <p className="mt-2 text-gray-600">
        현재 이 텍스트는 서버컴포넌트에서 렌더링된 텍스트입니다.
      </p>
      <div className="mt-4 p-2 bg-gray-100 rounded text-center font-bold text-purple-700">
        시간: {time}
      </div>
      <div className="mt-4 text-center">

        {/* 
          <button 
            className="px-4 py-2 bg-blue-500 rounded text-white"
            onClick={}>
            카운팅 : 0
          </button>
        */}
        <CouterButton />
        
      </div>
    </div>
  );
}
