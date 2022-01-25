import { useSearchPostsQuery } from "../../app/services/post";
import DataTable from "../../components/DataTable";

const columns = [
  {
    Header: "Tiêu đề",
    accessor: "title",
  },
  {
    Header: "Slug",
    accessor: "slug",
  },
  {
    Header: "Trích đoạn",
    accessor: "excerpt",
  },
];

export default function PostsList() {
  const { data: posts, isLoading } = useSearchPostsQuery();

  if (isLoading) {
    return <div>Loading</div>;
  }

  if (!posts) {
    return <div>No posts :(</div>;
  }

  return <DataTable columns={columns} data={posts.data} />;
}
