import { combineReducers } from 'redux';
import { ACTION_LIST } from './actions';

const cartReducer = (
  state = {
    items: [],
    totalQty: 0,
  },
  action
) => {
  switch (action.type) {
    case ACTION_LIST.ADD_TO_CART: {
      let existingProductIndex = state.items.findIndex(
        (product) => product.id === action.payload.id
      );

      let totalQty = state.totalQty;

      let newItems;

      if (existingProductIndex !== -1) {
        newItems = [...state.items];
        newItems[existingProductIndex].qty += action.payload.qty;
      } else {
        newItems = state.items.concat({ ...action.payload });
      }

      totalQty += action.payload.qty;

      return {
        items: newItems,
        totalQty,
      };
    }

    case ACTION_LIST.REMOVE_FROM_CART: {
      return state.items.filter((product) => product.id !== action.payload.id);
    }

    default: {
      return state;
    }
  }
};

// const store = createStore(cartReducer);

export default combineReducers({ cart: cartReducer });
