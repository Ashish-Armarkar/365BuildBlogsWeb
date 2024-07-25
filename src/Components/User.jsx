import { Link } from "react-router-dom";

const User = ({ user }) => {
  return (
    <>
      <div className="list-group-item d-flex justify-content-between">
        <div className="d-flex flex-wrap justify-content-between">
          <span>{user.name}</span> <span className="ms-4">{user.email}</span>
        </div>
        <Link to={`/users/:${user.id}`} className="">
          View Details
        </Link>
      </div>
    </>
  );
};

export default User;
