import { UsersFetcher  } from "./Fetches";
import User from "./User";

const UsersView = ( { users } ) => {
  return (
    <>
      <div className="container">
        <h1 className="mb-3">Users</h1>
        <div className="list-group">
          {users.map((user) => (
            <User key={user.id} user={user}></User>
          ))}
        </div>
      </div>
    </>
  );
};

const Users = () => (
  <UsersFetcher 
    renderSuccess={ ( users ) => <UsersView users={ users }/> }
  />
)

export default Users;
