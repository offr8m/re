import Item from "./Item";
import useMsgs from "../../hooks/msgs/useMsgs";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function List() {
  const msgs = useMsgs();
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="msgs-List">
      <div className="msgs-List-backBtn" onClick={goBack}>
        <FaArrowLeft />
      </div>
      <ul className="msgs-List-ul">
        {msgs.map((msg) => (
          <Item msg={msg} key={msg.id} />
        ))}
      </ul>
    </div>
  );
}

export default List;
