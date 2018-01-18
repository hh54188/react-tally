import { ADD_ACTION } from "../actions/add";
import { MINUS_ACTION } from "../actions/minus";
import { RESET_ACTION } from "../actions/reset";

const counterReducer = (state = 1, action) => {
  const { type } = action;
  switch (type) {
    case ADD_ACTION:
      return state + 1;
    case MINUS_ACTION:
      return state - 1;
    case RESET_ACTION:
      return 0;
    default:
      return state;
  }
};

export default counterReducer;
