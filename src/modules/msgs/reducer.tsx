import { createReducer } from "typesafe-actions";
import { ADD_MSG, DEL_MSG } from "./actions";
import { MsgsAction, MsgsState } from "./types";

const initialState: MsgsState = [
  { id: 0, text: "첫번째 메시지" },
  { id: 1, text: "두번째 메시지" },
  { id: 2, text: "세번째 메시지" },
  { id: 3, text: "네번째 메시지" },
  { id: 4, text: "다섯번째 메시지" }
];

const msgs = createReducer<MsgsState, MsgsAction>(initialState, {
  [ADD_MSG]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map((msg) => msg.id)) + 1,
      text
    }),
  [DEL_MSG]: (state, { payload: id }) => state.filter((msg) => msg.id !== id)
});

export default msgs;
