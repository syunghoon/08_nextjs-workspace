import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Post } from "../types";

type PostFormMode = "create" | "edit";

interface PostFormProps {
  mode?: PostFormMode;
  initialPost?: Post;
}

export default function PostForm({
  mode = "create",
  initialPost = {
    id: 0,
    title: "",
    content: "",
    createdAt: "",
  },
}: PostFormProps) {

  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title">제목</Label>
        <Input
          id="title"
          name="title"
          placeholder="게시글 제목을 입력하세요"
          defaultValue={initialPost.title}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">내용</Label>
        <Textarea
          id="content"
          name="content"
          className="min-h-[200px]"
          placeholder="게시글 내용을 입력하세요"
          defaultValue={initialPost.content}
        />
      </div>

      {/* 
      <div className="rounded-md bg-destructive/10 text-destructive text-sm p-3">
        에러메시지
      </div> 
      */}
      
      <div className="flex justify-end gap-2">
        <Button type="submit" className="min-w-24">
          등록하기 | 수정하기 
        </Button>
      </div>
    </form>
  );
}