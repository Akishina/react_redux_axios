import { useGetPostQuery } from "../../app/services/post";
import { useParams } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import Editor from "../../components/Editor";

export default function Post() {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostQuery(id);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Editor value={post.content} />
    </div>
  );
}
