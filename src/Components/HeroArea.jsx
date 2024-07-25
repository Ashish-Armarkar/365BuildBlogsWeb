import { Link } from "react-router-dom";
import style from "./HeroArea.module.css";

const HeroArea = () => {
  return (
    <div>
      <div className={style.heading}>
        <h1>Welcome to Blogs Application</h1>
      </div>
      <div className={style.list}>
        <ul>
          <li>
            <Link to="/blogs">View the list of Blogs</Link>
          </li>
          <li>
            <Link to="/users">View the list of Users</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeroArea;
