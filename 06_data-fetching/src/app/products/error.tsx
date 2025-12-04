'use client'

import { useRouter } from "next/navigation";
import { useTransition } from "react";

type ErrorProps = {
  error: Error;
  reset: () => void
}

export default function Error({error, reset}: ErrorProps) { // { error: Error객체, reset: 함수 }
  
  const router = useRouter();
  const [isPending, startTransition] = useTransition(); // [실행중여부, 함수]

  const handleReset = () => {

    startTransition(() => {
      router.refresh(); // 서버에 "새 데이터 줘!" - 비동기 
      reset(); // 화면 "다시그려!!" - 동기
    })
    
  }
  
  return (
    <div className="p-8">
      <p className="text-center text-gray-500 mt-4">
        {error.message || '알 수 없는 오류가 발생했습니다.'} 
      </p>
      <div className="text-center">
        <button 
          className="px-4 py-2 bg-red-500 rounded text-white mt-2 hover:bg-red-700"
          onClick={handleReset}>
            다시시도
        </button>
      </div>
    </div>
  );
}