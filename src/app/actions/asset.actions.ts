import { createAction, props } from '@ngrx/store';
import { Asset } from '../models/asset';

export const CREATE_ASSET = '[Asset] Create';
export const UPDATE_ASSET = '[Asset] Update';
export const SORT_ASSETS = '[Asset] Sorted assets';
export const FILTER_ASSETS = '[Asset] Filtered assets'; 

export const createAsset = createAction(
    CREATE_ASSET,
    props<{ asset: Asset }>()
);

export const sortAssets = createAction(
    SORT_ASSETS
);

export const filterAssets = createAction(
    FILTER_ASSETS,
    props<{ searchQuery }>()
);