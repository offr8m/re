import { useState } from "react";
import useAddMsg from "../../hooks/msgs/useAddMsg";

function Input() {
  const [value, setValue] = useState("");
  const addMsg = useAddMsg();
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addMsg(value);
    setValue("");
  };

  return (
    <div className="msgs-Input">
      <textarea
        className="msgs-Input-textarea"
        value={value}
        onChange={onChange}
      />
      <button className="msgs-Input-button" onClick={onSubmit}>
        ADD
      </button>
    </div>
  );
}

export default Input;
