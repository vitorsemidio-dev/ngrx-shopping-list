import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '@shopping/ADD_ITEM',
  ADD_ITEM_SUCCESS = '@shopping/ADD_ITEM_SUCCESS',
  ADD_ITEM_FAILURE = '@shopping/ADD_ITEM_FAILURE',

  LOAD_SHOPPING = '@shopping/LOAD_SHOPPING',
  LOAD_SHOPPING_SUCCESS = '@shopping/LOAD_SHOPPING_SUCCESS',
  LOAD_SHOPPING_FAILURE = '@shopping/LOAD_SHOPPING_FAILURE',

  REMOVE_ITEM = '@shopping/REMOVE_ITEM',
  REMOVE_ITEM_SUCCESS = '@shopping/REMOVE_ITEM_SUCCESS',
  REMOVE_ITEM_FAILURE = '@shopping/REMOVE_ITEM_FAILURE',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}
export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export type ShoppingAction = AddItemAction | RemoveItemAction;
