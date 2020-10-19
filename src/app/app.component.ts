import { Component, VERSION, Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { AssetService } from './asset.service';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { Asset } from './models/asset';
import { createAsset } from './actions/asset.actions';
import { filter } from 'rxjs/operators';
import { AppState } from './app.state';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   public assets$ = this.store.pipe(select(state => state.assets));

  constructor(
    private assetService: AssetService,
    private store: Store<AppState>,
  ) {
    this.assetService.simulatedLiveAssets()
      .subscribe((asset) => {
        this.store.dispatch(createAsset({ asset }));
      });
  }
}