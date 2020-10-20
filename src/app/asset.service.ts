import { Injectable } from '@angular/core';
import { interval, Observable, from } from 'rxjs';
import { Asset } from './models/asset';
import { Stocks } from './stocks';
import { Currency } from './currency';
import { map, filter } from 'rxjs/operators';


@Injectable()
export class AssetService {
    private readonly Stock = 'Stock';
    private readonly Currency = 'Currency';
    
    constructor() {}

    private createAsset = (assetId, assetType): Asset => {
      return {
        id: assetId,
        assetName: assetType === this.Stock ? [Stocks.APPLE, Stocks.GOOGLE, Stocks.FACEBOOK, Stocks.TESLA, Stocks.MICROSOFT][Math.floor(Math.random() * 4)] : [Currency.EUROPE, Currency.UNITED_STATES_DOLLAR ,Currency.BRITISH_POUND, Currency.ISREALI_SHEKEL, Currency.AUTRALIAN_DOLLAR][Math.floor(Math.random() * 4)],
        price: Math.random()*10,
        lastUpdate: Date.now(),
        type: assetType,
      }
    };

    private getAllAssets = (n): Asset[] => {
      const result = [];
      for (let i = 0; i < n; i++) {
        result.push(this.createAsset(i, this.Stock ));
        result.push(this.createAsset(i+n, this.Currency ));
      }       
      return result;
    }

    private assets = this.getAllAssets(200);

    public initialAssets$ = from(this.assets);

    public simulatedLiveAssets(): Observable<any> {
      return Observable.create((ob) => {
        interval(1000).subscribe(() => {
          return this.initialAssets$.pipe(
            map(val => {
              let val2 = { ...val }; 
              const random = Math.random();
              val2.price = random >= 0.5 ? val.price + random : val.price - random;
              val2.lastUpdate = Date.now();
              return val2;
            })
          ).subscribe(val => ob.next(val));
        });
        return () => null;
      }).pipe(
        filter((asset: any) => asset.id < 400)
      );
    }
}
