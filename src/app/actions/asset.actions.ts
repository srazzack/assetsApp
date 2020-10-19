import { createAction, props } from '@ngrx/store';
import { Asset } from '../models/asset';

export const CREATE_ASSET = '[Asset] Create';
export const UPDATE_ASSET = '[Asset] Update';

export const createAsset = createAction(
    CREATE_ASSET,
    props<{ asset: Asset }>()
);
