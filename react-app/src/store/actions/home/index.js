import { createAction } from "redux-actions";

export const FETCH_TAC_DATA = 'FETCH_TAC_DATA';
export const fetchTACData = createAction(FETCH_TAC_DATA);

export const FETCH_TAC_DATA_REQUESTED = 'FETCH_TAC_DATA_REQUESTED';
export const fetchTACDataRequested = createAction(FETCH_TAC_DATA_REQUESTED);

export const FETCH_TAC_DATA_SUCCESS = 'FETCH_TAC_DATA_SUCCESS';
export const fetchTACDataSuccess = createAction(FETCH_TAC_DATA_SUCCESS);

export const FETCH_TAC_DATA_FAILURE = 'FETCH_TAC_DATA_FAILURE';
export const fetchTACDataFailure = createAction(FETCH_TAC_DATA_FAILURE);

// accept / decline
export const ACCEPT_TERMS = 'ACCEPT_TERMS';
export const acceptTermsData = createAction(ACCEPT_TERMS);

export const ACCEPT_TERMS_REQUESTED = 'ACCEPT_TERMS_REQUESTED';
export const acceptTermsRequested = createAction(ACCEPT_TERMS_REQUESTED);

export const ACCEPT_TERMS_SUCCESS = 'ACCEPT_TERMS_SUCCESS';
export const acceptTermsSuccess = createAction(ACCEPT_TERMS_SUCCESS);

export const ACCEPT_TERMS_FAILURE = 'ACCEPT_TERMS_FAILURE';
export const acceptTermsFailure = createAction(ACCEPT_TERMS_FAILURE);

// fetch tiles data
export const FETCH_TILES = 'FETCH_TILES';
export const fetchTilesData = createAction(FETCH_TILES);

export const FETCH_TILES_REQUESTED = 'FETCH_TILES_REQUESTED';
export const fetchTilesRequested = createAction(FETCH_TILES_REQUESTED);

export const FETCH_TILES_SUCCESS = 'FETCH_TILES_SUCCESS';
export const fetchTilesSuccess = createAction(FETCH_TILES_SUCCESS);

export const FETCH_TILES_FAILURE = 'FETCH_TILES_FAILURE';
export const fetchTilesFailure = createAction(FETCH_TILES_FAILURE);

// update TAC temperory
export const UPDATE_TAC = 'UPDATE_TAC';
export const updateTACData = createAction(UPDATE_TAC);
