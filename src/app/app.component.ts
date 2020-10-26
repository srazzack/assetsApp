import { Component } from '@angular/core';
import { AssetService } from './asset.service';
import * as _ from 'lodash';
import { Store, select } from '@ngrx/store';
import { createAsset, filterAssets } from './actions/asset.actions';
import { AppState } from './app.state';
import { filter } from 'rxjs/operators';
import { Asset } from './models/asset';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
   public assets$ = this.store.pipe(select('assets'));
   public searchQuery: string;
  constructor(
    private assetService: AssetService,
    private store: Store<AppState>,
  ) {
    this.assetService.simulatedLiveAssets()
      .subscribe((asset) => {
        this.store.dispatch(createAsset({ asset }));
      });
  }

  public filterAssets(searchQuery) {
    this.store.dispatch(filterAssets({ searchQuery }));
  }
}
