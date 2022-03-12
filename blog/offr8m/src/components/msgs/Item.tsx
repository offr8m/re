import { Msg } from "../../modules/msgs";
import useDelMsg from "../../hooks/msgs/useDelMsg";

type MsgItemProps = {
  msg: Msg;
};

function Item({ msg }: MsgItemProps) {
  const { onRemove } = useDelMsg(msg.id);

  return (
    <div className="msgs-Item">
      <span className="msgs-Item-text">{msg.text}</span>
      <button className="msgs-Item-button" onClick={onRemove}>
        DEL
      </button>
    </div>
  );
}

export default Item;
