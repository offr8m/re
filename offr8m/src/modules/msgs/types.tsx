import { ActionType } from "typesafe-actions";
import * as actions from "./actions";

export type MsgsAction = ActionType<typeof actions>;

export type Msg = {
  id: number;
  text: string;
};

export type MsgsState = Msg[];
