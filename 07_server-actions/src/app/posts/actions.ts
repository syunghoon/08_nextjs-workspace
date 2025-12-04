'use server';

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createPost, deletePost, updatePost } from "./services";

// 서버 액션용 함수 
/*
export async function createPostAction(formData: FormData) {

  // 딜레이 임의로 주기
  await new Promise((resolve) => {setTimeout(resolve, 1000)});

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 유효성 검사 

  // 데이터 가공 
  const payload = {
    title,
    content,
    author
  }

  // api 요청 => db 저장
  await createPost(payload);

  // 게시글 목록 캐시갱신 => url 재요청(redirect) 
  revalidatePath("/posts");
  redirect("/posts");

}
*/




// 액션 상태 관리
type ActionState = {
  success: boolean;
  message?: string;  // 전체 메세지용
  errors?: Record<string, string>
}

export async function createPostAction(prevState: ActionState, formData: FormData): Promise<ActionState> {

  console.log(formData)

  // 딜레이 임의로 주기
  await new Promise((resolve) => {setTimeout(resolve, 1000)});

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  const errors: Record<string, string> = {};
  // 유효성 검사 
  if(title.length > 10){
    errors.title = '제목은 10자 이하여야됩니다.';
  }
  if(content.length > 100){
    errors.content = '내용은 100자 이하여야됩니다.';
  }
  if(!author) {
    errors.author = '작성자는 필수 입력 필드 입니다.';
  }

  // 유효성 검사시 에러가 하나라도 존재하면 리턴
  if(Object.keys(errors).length > 0){
    return {
      success: false,
      message: '유효성 검사 실패',
      errors
    }
  }

  // 데이터 가공 
  const payload = {
    title,
    content,
    author
  }

  // api 요청 => db 저장
  try {
    await createPost(payload);
  }catch(error) {
    console.log(error);
    return {
      success: false,
      message: '데이터 저장 중에 오류가 발생하였습니다.'
    }
  }

  // 게시글 목록 캐시갱신 => url 재요청(redirect) 
  revalidatePath("/posts");
  redirect("/posts");

  return {
    success: true
  }

}








// id 넘겨받는 방법1. 고전적인 방법 - input hidden
/*
export async function updatePostAction(formData: FormData) {

  const id = formData.get('id') as string;
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 검증

  // 데이터 가공
  const payload = {
    title, content, author
  }

  // 백엔드 API 요청 
  await updatePost(id, payload);

  // 후속작업 
  revalidatePath('/posts');       // 목록 갱신
  revalidatePath(`/posts/${id}`); // 상세 갱신
  redirect(`/posts/${id}`); // 상세페이지로 자동 이동

}
*/

// id 넘겨받는 방법2. 바인딩(고정)된 id값을 첫번째 매개변수 받기
export async function updatePostAction(id: string, formData: FormData) {

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const author = formData.get('author') as string;

  // 검증

  // 데이터 가공
  const payload = {
    title, content, author
  }

  // 백엔드 API 요청 
  await updatePost(id, payload);

  // 후속작업 
  revalidatePath('/posts');       // 목록 갱신
  revalidatePath(`/posts/${id}`); // 상세 갱신
  redirect(`/posts/${id}`); // 상세페이지로 자동 이동

}


export async function deletePostAction(id: string) {
  await deletePost(id);
  revalidatePath('/posts'); // 목록 갱신
  // alert('성공적으로 삭제되었습니다!'); => 서버에서 동작되는 코드기 때문에 브라우저 내장 기능 사용 불가
}