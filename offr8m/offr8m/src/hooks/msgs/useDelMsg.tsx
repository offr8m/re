import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { delMsg } from "../../modules/msgs";

export default function useDelMsg(id: number) {
  const dispatch = useDispatch();

  const onRemove = useCallback(() => dispatch(delMsg(id)), [dispatch, id]);

  return { onRemove };
}
