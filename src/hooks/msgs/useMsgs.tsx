import { useSelector } from "react-redux";
import { RootState } from "../../modules";

export default function useMsgs() {
  const msgs = useSelector((state: RootState) => state.msgs);
  return msgs;
}
