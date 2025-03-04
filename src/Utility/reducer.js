import { Types } from "./actionType";
export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  console.log("state", state);
  switch (action.type) {
    case Types.ADD_TO_BASKET:
      const exsistingItem = state.basket.find(
        (item) => item.id === action.items.id
      );
      if (!exsistingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.items, amount: 1 }],
          //     [
          //       ...state.basket,
          //   { id: 1, name: "Item 1" },
          //   { id: 2, name: "Item 2" },
          //...action.items, amount: 1
          //   { id: 3, name: "Item 3", amount: 1 }, // New item added with amount property
          // ];
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          console.log("item", item);
          if (item.id === action.items.id) {
            return { ...item, amount: item.amount + 1 };
          }
          return item;
        })
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    default:
      return state;
  }
};
