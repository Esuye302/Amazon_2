import { Types } from "./actionType";
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Types.ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.items],
      };
    default:
      return state;
  }
};
