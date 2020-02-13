import { Component } from '@angular/core';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngrx-shopping-list';

  constructor(private store: Store<AppState>) {

  }
}
