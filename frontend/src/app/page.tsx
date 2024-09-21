
import PostDisplay from "@/components/PostDisplay/PostDisplay";
import PostForm from "@/components/PostForm/PostForm";

export default function Home() {
  return (
    <div className="pt-2">
      <PostForm />
      {[0,1,2].map(()=><PostDisplay/>)}
    </div>
  );
}
