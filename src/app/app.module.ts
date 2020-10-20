import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MatTableModule } from '@angular/material/table';
import { AssetService } from './asset.service';
import { StoreModule } from '@ngrx/store';
import { assetsReducer } from './reducers/assets.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, MatTableModule, StoreModule.forRoot({ assets: assetsReducer }), StoreDevtoolsModule.instrument({ maxAge: 25 }), EffectsModule.forRoot([]) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ AssetService ],
})
export class AppModule { }
