import { AddItemAction } from './store/actions/shopping.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ShoppingItem } from './store/models/shopping-item.model';
import { AppState } from './store/models/app-state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shoppingItems$: Observable<Array<ShoppingItem>>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit() {
    this.shoppingItems$ = this.store.select(store => store.shopping);

    setTimeout(() => this.addItem(), 2000);
  }

  addItem() {
    this.store.dispatch(new AddItemAction({ id: '123', name: 'Pizza' }));
  }
}
