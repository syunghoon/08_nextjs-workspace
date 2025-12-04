import { updatePostAction } from "../../actions";
import { getPostById } from "../../services";

export default async function PostEditPage({params}: {params: Promise<{id: string}>}) {

  const {id} = await params;
  const post = await getPostById(id); // 수정할 게시글 원글


  return (
    <form 
      // id 넘기는 방법2. action 함수 바인딩 방법
      // updatePostAction 함수에 id값이 바인딩(고정)된채로 복사 
      action={updatePostAction.bind(null, id)}
      className="flex flex-col max-w-100 gap-4 m-4"
    >
      {/* id 넘기는 방법1. 고전적인 방법 - input hidden */}
      {/* <input type="hidden" name="id" defaultValue={post.id} /> */}
      
      <input 
        type="text"
        name="title"
        placeholder="제목"
        className="border rounded border-gray-300 p-1"
        defaultValue={post.title}
        required
      />
      <textarea 
        name="content"
        placeholder="내용"
        className="border rounded border-gray-300 p-1"
        defaultValue={post.content}
        required
      />
      <input 
        type="text"
        name="author"
        placeholder="작성자"
        className="border rounded border-gray-300 p-1"
        defaultValue={post.author}
        required
      />
      <button 
        type="submit"
        className="bg-blue-500 rounded text-white mt-2 p-2"
      >
        수정
      </button>
    </form>
  );
}