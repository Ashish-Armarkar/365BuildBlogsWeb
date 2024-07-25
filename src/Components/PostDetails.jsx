import Fetcher from "./Fetches";
import { useParams } from "react-router-dom";
import CommentByPostId from "./CommentByPostId";

const PostDetailsView = ( { post, comments } ) => { 
  return (
    <div className="container">
      <h1>{post.title}</h1>
      <div className="d-flex mt-5">
        <div>{post.body}</div>
        <div className="ms-2">
          <h6>Comments</h6>
          {comments.map((comment) => (
            <CommentByPostId
              key={comment.id}
              comment={comment}
            ></CommentByPostId>
          ))}
        </div>
      </div>
    </div>
  );
};

const PostDetails = () => {
  const { id } = useParams();

  return (
    <Fetcher 
        url={ `https://jsonplaceholder.typicode.com/posts/${id}`}
        renderSuccess={ ( post ) => {
            return (
              <Fetcher 
                url={`https://jsonplaceholder.typicode.com/posts/${id}/comments`}
                renderSuccess={ ( comments ) => (
                  <PostDetailsView 
                    post={post}
                    comments={comments}
                  />
                )}
              />
            )
        } }
    />
  )
}


export default PostDetails;
