import { combineReducers } from 'redux';
import { ACTION_LIST } from './actions';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ACTION_LIST.ADD_TO_CART: {
      return [...state, { ...action.payload }];
    }

    case ACTION_LIST.REMOVE_FROM_CART: {
      return state.filter((product) => product.id !== action.payload.id);
    }

    default:
      return state;
  }
};

// const store = createStore(cartReducer);

export default combineReducers({ cart: cartReducer });
