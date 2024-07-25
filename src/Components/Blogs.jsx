import { useMemo } from "react";
import { PostsFetcher, UsersFetcher } from "./Fetches";
import BlogsItem from "./BlogsItem";


const BlogsView = ( { posts, users, refetch } ) => {

  const usersMap = useMemo( () => {
      const usersMap = {};
      for( let user of users ){
          usersMap[ user.id ] = user;
      }
      return usersMap;
  }, [ users ]);

  return (
    <div className="container">
      <div className="d-flex justify-content-between mb-3">
        <h2>List of Blogs</h2>
        <button className="btn btn-primary" onClick={ refetch }>
          <svg
            width="1em"
            height="1em"
            viewBox="0 0 16 16"
            fill="currentColor"
            role="img"
            focusable="false"
          >
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z"></path>
            <path
              fillRule="evenodd"
              d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
            ></path>
          </svg>
        </button>
      </div>
      <div className="list-group">
        {posts.map((post) => (
          <BlogsItem key={post.id} post={post} users={usersMap}></BlogsItem>
        ))}
      </div>
    </div>
  );
};

const Blogs = () => {
    return ( 
      <PostsFetcher 
        renderSuccess={ ( posts, postsRefetch ) => {
          return (
            <UsersFetcher 
              renderSuccess={ ( users, usersRefetch  ) => (
                <BlogsView 
                  users={ users }
                  posts={ posts}
                  refetch={ () => {
                    postsRefetch();
                    usersRefetch();
                  } }
                />
              )  
              }
            />
          ) 
          }
        }
      />
    )
}

export default Blogs;
