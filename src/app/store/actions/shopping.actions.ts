import { Action } from '@ngrx/store';
import { ShoppingItem } from '../models/shopping-item.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '@shopping/ADD_ITEM',
  ADD_ITEM_SUCCESS = '@shopping/ADD_ITEM_SUCCESS',
  ADD_ITEM_FAILURE = '@shopping/ADD_ITEM_FAILURE',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: ShoppingItem) {}
}

export type ShoppingAction = AddItemAction;
