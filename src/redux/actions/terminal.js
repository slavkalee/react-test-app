import { ADD_TERMINAL, REMOVE_TERMINAL } from "../actionTypes";

export function addTerminal(title, desc) {
  return {
    type: ADD_TERMINAL,
    payload: { title, desc },
  };
}

export function removeTerminal(id) {
  return {
    type: REMOVE_TERMINAL,
    payload: { id },
  };
}
