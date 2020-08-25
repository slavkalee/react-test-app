import { ADD_TERMINAL, REMOVE_TERMINAL } from "../actionTypes";

const initialState = [];

export default function terminals(state = initialState, action) {
  switch (action.type) {
    case ADD_TERMINAL:
      const { title, desc } = action.payload;
      return [
        ...state,
        {
          id: Date.now(),
          title,
          desc,
        },
      ];
    case REMOVE_TERMINAL:
        return state.filter(terminal => terminal.id !== action.payload.id);
    default:
      return state;
  }
}
