import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

function Item() {
  return (
    <div className="home-Item">
      <Link className="home-Item-Link" to="/msgs">
        <FaComment className="home-Item-icon" />
        <span className="home-Item-sapn">Online msg service</span>
      </Link>
    </div>
  );
}

export default Item;
