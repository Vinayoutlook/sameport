import { all, call, put, takeLatest } from "redux-saga/effects";
import httpClient from '../http-client';
import { ACCEPT_TERMS, acceptTermsFailure, acceptTermsRequested, acceptTermsSuccess, FETCH_TAC_DATA, FETCH_TILES, fetchTACDataFailure,FETCH_TAC_DATA_REQUESTED, fetchTACDataRequested, fetchTACDataSuccess, fetchTilesFailure, fetchTilesRequested, fetchTilesSuccess, LOGIN_SUCCESS } from "../../actions/home";

//const lambdaurl = 'https://h43wd6dgctzlyjmewtb745qfdm0nebcv.lambda-url.us-west-2.on.aws/';
const accessToken = () => {
    try {
        const storageItem = sessionStorage.getItem("okta-token-storage");
        if (storageItem) {
            const { accessToken } = JSON.parse(storageItem);
            return accessToken || "";
        }
    } catch (error) {
        console.error("Error parsing session storage item:", error);
    }
    return "";
};




function* fetchTACData(action) {

  try {
     const userEmail = accessToken()?.claims?.sub || '';

        const { status, data } = yield call(httpClient, {
            method:'get',
            url:`/items/${userEmail}`
        });


        yield put(fetchTACDataSuccess(data));
    } catch (error) {
        yield put(fetchTACDataFailure(error.message));
    }
}


function* fetchTACSaga({params}){

    yield put(fetchTACDataRequested());

    const userEmail = accessToken()?.claims?.sub || '';

    const { status, data } = yield call(httpClient, {
        method:'get',
        url:`/items/${userEmail}`
    });

    try{
        if(status === 'success'){
            yield put(fetchTACDataSuccess(data?.accepted))
        }else{
            yield put(fetchTACDataFailure(data))
        }
    }catch(e){
        yield put(fetchTACDataFailure(data))
    }


}



function* acceptTermsSaga({payload}){
    
    yield put(acceptTermsRequested());

    const userEmail = accessToken()?.claims?.sub || '';

    const { status, data } = yield call(httpClient, {        
        method:'get',
        url:`/items/${userEmail}/terms=${payload}`
    });
    
    try{    
        if(status === 'success'){
            yield put(acceptTermsSuccess(data?.accepted))
        }else{
            yield put(acceptTermsFailure(data))
        }
    }catch(e){
        yield put(acceptTermsFailure(data))
    }

    
}

function* fetchTilesSaga({params}){
    
    yield put(fetchTilesRequested());

    const userEmail = accessToken()?.claims?.sub || '';

    const { status, data } = yield call(httpClient, {        
        method:'get',
        url:`/tilesData/${userEmail}`
    });
    
    try{    
        if(status === 'success'){
            yield put(fetchTilesSuccess(data?.accepted))
        }else{
            yield put(fetchTilesFailure(data))
        }
    }catch(e){
        yield put(fetchTilesFailure(data))
    }

    
}


export default function* homeSaga(){
    yield all([
        takeLatest(FETCH_TAC_DATA, fetchTACSaga),
        takeLatest(ACCEPT_TERMS, acceptTermsSaga),
        takeLatest(FETCH_TILES, fetchTilesSaga),
        takeLatest(FETCH_TAC_DATA_REQUESTED, fetchTACData),
    ])
}