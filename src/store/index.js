import { combineReducers, createStore } from 'redux';
import { ACTION_LIST } from './actions';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_LIST.ADD_TO_CART: {
      return [...state, action.payload];
    }

    case ACTION_LIST.REMOVE_FROM_CART: {
      return state.filter((product) => product.id !== payload.id);
    }

    default:
      state;
  }
};

// const store = createStore(cartReducer);

export default combineReducers({ cart: cartReducer });
