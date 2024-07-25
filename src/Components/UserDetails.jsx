import Fetcher from "./Fetches";
import { useParams } from "react-router-dom";
import PostById from "./PostById";
import CommentById from "./CommentById";

const UserDetailsView = ( { userData } ) => {
  return (
    <div className="container">
      <div className="d-flex flex-column">
        <h1>Name: {userData.name}</h1>
        <b>Username: {userData.username}</b>
        <b>Email: {userData.email}</b>
        <b>Phone: {userData.phone}</b>
        <b>
          <a href={`http://${userData.website}`}>{userData.website}</a>
        </b>
        <em>
          {`${userData.address.street} ${userData.address.suite} ${userData.address.city} ${userData.address.zipcode}`}
        </em>
      </div>
      <div className="d-flex mt-5">
        <div>
          <h6>Posts by {userData.name}</h6>
          <PostById id={userData.id}></PostById>
        </div>
        <div className="ms-2">
          <h6>Comments by {userData.name}</h6>

          <CommentById id={userData.id}></CommentById>
        </div>
      </div>
    </div>
  );
};

const UserDetails = () => {
  const { id } = useParams();

  return (
    <Fetcher 
        url={`https://jsonplaceholder.typicode.com/users/${id.substring(1)}`}
        renderSuccess={ ( userData ) => (
          <UserDetailsView userData={ userData } />
        ) }
    />
  )
}

export default UserDetails;
