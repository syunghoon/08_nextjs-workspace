'use client';

import { useFormStatus } from "react-dom";

export default function CreateButton() {

  // pending: 액션함수 동작중이면 true, 아니면 false
  const {pending} = useFormStatus(); // {pending: boolean, ..}

  return (
    <button 
      type="submit"
      className="bg-blue-500 rounded text-white mt-2 p-2"
      disabled={pending}
    >
      {pending ? '등록 중...' : '등록'}
    </button>
  );
}