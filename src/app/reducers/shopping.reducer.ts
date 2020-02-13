import { ShoppingAction, ShoppingActionTypes } from './../store/actions/shopping.actions';
import { ShoppingItem } from '../store/models/shopping-item.model';

export interface ShoppingState {
  list: ShoppingItem[];
  loading: boolean;
  error: Error;
}

const initialState: ShoppingState = {
  list: [],
  loading: false,
  error: undefined,
};

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.LOAD_SHOPPING:
      return {
        ...state, loading: true,
      };
    case ShoppingActionTypes.LOAD_SHOPPING_SUCCESS:
      return {
        ...state, loading: false, list: action.payload
      };
    case ShoppingActionTypes.LOAD_SHOPPING_FAILURE:
      return {
        ...state, error: action.payload, loading: false
      };


    case ShoppingActionTypes.REMOVE_ITEM:
      return {
        ...state, loading: true,
      };
    case ShoppingActionTypes.REMOVE_ITEM_SUCCESS:
      return {
        ...state,
        loading: false,
        list: state.list.filter(s => s.id !== action.payload.id)
      };
    case ShoppingActionTypes.REMOVE_ITEM_FAILURE:
      return {
        ...state, error: action.payload, loading: false
      };


    case ShoppingActionTypes.ADD_ITEM:
      return {
        ...state, loading: true,
      };
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {
        ...state, loading: false, list: action.payload
      };
    case ShoppingActionTypes.ADD_ITEM_FAILURE:
      return {
        ...state, error: action.payload, loading: false
      };

    default:
      return state;
  }
}
