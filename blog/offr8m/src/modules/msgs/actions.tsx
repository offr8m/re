import { createAction } from "typesafe-actions";

export const ADD_MSG = "modules/ADD_MSG";
export const DEL_MSG = "modules/DEL_MSG";

export const addMsg = createAction(ADD_MSG)<string>();
export const delMsg = createAction(DEL_MSG)<number>();
