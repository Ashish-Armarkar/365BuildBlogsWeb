import Fetcher from "./Fetches";

const PostByIdView = ({ postData }) => {
  return (
    <>
      <div className="list-group">
        {postData.map((post) => (
          <a href="#" className="list-group-item" key={post.id}>
            {post.title}
          </a>
        ))}
      </div>
    </>
  );
};

const PostById = ( { id } ) => {
    return (
      <Fetcher 
        url={ `https://jsonplaceholder.typicode.com/users/${id}/posts` }
        renderSuccess={ ( postData ) => (
          <PostByIdView postData={ postData } />
        ) }
      />
    )
}

export default PostById;
