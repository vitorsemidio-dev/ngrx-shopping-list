import { ShoppingService } from './../../shopping.service';
import {
  ShoppingActionTypes,
  LoadShoppingAction,
  LoadShoppingSuccessAction,
  LoadShoppingFailureAction,
  AddItemAction,
  AddItemSuccessAction,
  AddItemFailureAction,
  RemoveItemAction,
  RemoveItemSuccessAction,
  RemoveItemFailureAction,
} from './../actions/shopping.actions';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class ShoppingEffects {


  constructor(
    private actions$: Actions,
    private shoppingService: ShoppingService
  ) {

  }

  @Effect() loadShopping$ = this.actions$
    .pipe(
      ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
      mergeMap(
        () => this.shoppingService.getShoppingItems()
          .pipe(
            map(data => {
              return new LoadShoppingSuccessAction(data);
            }),
            catchError(error => of(new LoadShoppingFailureAction(error)))
          )
      ),
  );

  @Effect() addShoppingItem$ = this.actions$
    .pipe(
      ofType<AddItemAction>(ShoppingActionTypes.ADD_ITEM),
      mergeMap(
        (data) => this.shoppingService.addShoppingItem(data.payload)
          .pipe(
            map(() => new AddItemSuccessAction(data.payload)),
            catchError(error => of(new AddItemFailureAction(error)))
          )
      )
  );

  @Effect() deleteShoppingItem$ = this.actions$
    .pipe(
      ofType<RemoveItemAction>(ShoppingActionTypes.REMOVE_ITEM),
      mergeMap(
        (data) => this.shoppingService.deleteShoppingItem(data.payload)
          .pipe(
            map(() => new RemoveItemSuccessAction(data.payload)),
            catchError(error => of(new RemoveItemFailureAction(error)))
          )
      )
  );

}
