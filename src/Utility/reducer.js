import { Types } from "./actionType";
export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state, action) => {
  // console.log("state", state);
  switch (action.type) {
    case Types.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.items.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.items, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          // console.log("item", item);
          if (item.id === action.items.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        });
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Types.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);

      //React state is immutable,
      let newBasket = [...state.basket];
      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          newBasket[index] = {...newBasket[index], amount: newBasket[index].amount - 1, };
        
        } else {
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
    case Types.SET_USER:
      return {
        ...state,
        user: action.user,
      };
      case Types.EMPTY_BASKET:
        return {
          ...state,
          basket:[]
        }
    default:
      return state;
  }
};
