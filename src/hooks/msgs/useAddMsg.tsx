import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addMsg } from "../../modules/msgs";

export default function useAddMsg() {
  const dispatch = useDispatch();
  return useCallback((text) => dispatch(addMsg(text)), [dispatch]);
}
