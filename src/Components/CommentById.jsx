import Fetcher from "./Fetches";

const CommentByIdView = ({ commentData }) => {
  return (
    <div className="list-group">
      {commentData.map((comment) => (
        <a key={comment.id} className="list-group-item">
          {comment.body}
        </a>
      ))}
    </div>
  );
};

const CommentById = ( { id } ) => {
  return (
    <Fetcher 
        url={ `https://jsonplaceholder.typicode.com/users/${id}/comments` }
        renderSuccess={ ( commentData ) => (
            <CommentByIdView 
              commentData={ commentData }
            />
        ) }
    />
  )
}

export default CommentById;
