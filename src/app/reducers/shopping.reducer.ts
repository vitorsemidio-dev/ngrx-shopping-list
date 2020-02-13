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
}

export function ShoppingReducer(state: ShoppingState = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM_SUCCESS:
      return {...state, list: action.payload, loading: false };
    case ShoppingActionTypes.REMOVE_ITEM:
      return {
        ...state,
        list: state.list.filter(s => s.id !== action.payload.id),
        loading: false
      };
    default:
      return state;
  }
}
