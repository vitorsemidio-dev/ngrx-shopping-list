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
export class AddItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_SUCCESS;

  constructor(public payload: ShoppingItem) {}
}
export class AddItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM_FAILURE;

  constructor(public payload: Error) {}
}

export class LoadShoppingAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING;

  constructor(public payload: ShoppingItem) {}
}
export class LoadShoppingSuccessAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_SUCCESS;

  constructor(public payload: Array<ShoppingItem>) {}
}
export class LoadShoppingFailureAction implements Action {
  readonly type = ShoppingActionTypes.LOAD_SHOPPING_FAILURE;

  constructor(public payload: Error) {}
}

export class RemoveItemAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM;

  constructor(public payload: string) {}
}
export class RemoveItemSuccessAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_SUCCESS;

  constructor(public payload: string) {}
}
export class RemoveItemFailureAction implements Action {
  readonly type = ShoppingActionTypes.REMOVE_ITEM_FAILURE;

  constructor(public payload: string) {}
}


export type ShoppingAction =
 | AddItemAction | AddItemSuccessAction | AddItemFailureAction
 | RemoveItemAction | RemoveItemSuccessAction | RemoveItemFailureAction
 | LoadShoppingAction | LoadShoppingSuccessAction | LoadShoppingFailureAction;
