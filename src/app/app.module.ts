import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { AssetService } from './asset.service';
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { assetsReducer } from './reducers/assets.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

export function assetMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<any>[] = [assetMetaReducer];

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatTableModule, StoreModule.forRoot({ assetsReducer }, { metaReducers }), StoreDevtoolsModule.instrument({ maxAge: 25 }), EffectsModule.forRoot([]) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AssetService,
    // {
    //   provide: META_REDUCERS,
    //   multi: true,
    //   useFactory: assetMetaReducer,
    //   deps: [AssetService]
    // } 
  ],
})
export class AppModule { }
