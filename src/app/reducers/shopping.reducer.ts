import { ShoppingAction, ShoppingActionTypes } from './../store/actions/shopping.actions';
import { ShoppingItem } from '../store/models/shopping-item.model';

const initialState: Array<ShoppingItem> = [
  {
    id: '123',
    name: 'Diet Coke'
  }
];

export function ShoppingReducer(state: Array<ShoppingItem> = initialState, action: ShoppingAction) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    default:
      return state;
  }
}
