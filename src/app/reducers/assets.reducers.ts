import { createAsset } from '../actions/asset.actions';
import { createReducer, on } from '@ngrx/store';
import { Asset } from '../models/asset';

const initialAssets: Asset[] = [
  {
    id: 1,
    assetName: 'stock', // "USD", Samsung Electronics Co Ltd : "SSNLF"
    price: 100, // asset current price relative to USD
    lastUpdate: 12421343, // unix timestamp
    type: 'Stock', // asset type Currency (e.g. USD, EUR...) or Stock (Samsung, Google)
  }
];

export const assetsReducer = createReducer<Asset[]>(initialAssets,
  on(createAsset, (state, action) => {
    if (state[action.asset.id]) {
      const newAssets = state.concat();
      newAssets[newAssets.findIndex(asset => asset.id === action.asset.id)] = action.asset;
      return newAssets;
    } else {
      return state.concat({ ...action.asset })
    }
  })
);
