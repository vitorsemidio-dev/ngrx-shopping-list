import { ShoppingService } from './../../shopping.service';
import {
  LoadShoppingAction,
  ShoppingActionTypes,
  LoadShoppingSuccessAction,
  LoadShoppingFailureAction
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

  @Effect() loadShopping$ = this.actions$.pipe(
    ofType<LoadShoppingAction>(ShoppingActionTypes.LOAD_SHOPPING),
    mergeMap(
      () => this.shoppingService.getShoppingItems()
        .pipe(
          map(data => new LoadShoppingSuccessAction(data)),
          catchError(error => of(new LoadShoppingFailureAction(error)))
        )
    )
  );

}
