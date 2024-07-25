import { Link } from "react-router-dom";

const BlogItems = ({ post, users }) => {
  const user = users[ post.userId ];
  return (
    <>
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{post.title}</h5>
          <small>
            <Link to={`/blogs/post/${post.id}`} className="">
              View
            </Link>
          </small>
        </div>
        <p className="mb-1">{post.body}</p>
        <div className="d-flex justify-content-end">
          <Link to={`/users/:${post.userId}`} className="text-body-secondary">
            By: {user?.name}
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogItems;
