import { call } from "redux-saga/effects";
import axiosInstance from '../../utils/axios';

export function* httpClient(payload) {

    try{
        const response = yield call(axiosInstance, {
            ...payload
        });

        const { status, data } = response;

        if(data){       

            if([200, 201, 204].indexOf(status) === -1){
                return {
                    status:'failed',
                    data:data,
                }
            }else{
                return {
                    status:'success',
                    data:data,
                }
            }
        }else{
            return {
                status:'failed',
                error:'error',
            }
        }
    }catch(e){
        return {
            status:'failed',
            data:'error',
        }
    }
}

export default httpClient;