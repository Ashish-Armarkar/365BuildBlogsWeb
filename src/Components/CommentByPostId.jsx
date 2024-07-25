const CommentByPostId = ({ comment }) => {
  return (
    <>
      <div className="list-group">
        <div className="list-group-item d-flex flex-column">
          <p>{comment.body}</p>
          <div className="d-flex justify-content-end">
            <small>
              <em>by {comment.email}</em>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentByPostId;
