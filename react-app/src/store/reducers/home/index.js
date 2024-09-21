import { ACCEPT_TERMS_SUCCESS, FETCH_TAC_DATA_FAILURE, FETCH_TAC_DATA_REQUESTED, FETCH_TAC_DATA_SUCCESS, FETCH_TILES_SUCCESS, UPDATE_TAC } from "../../actions/home";

const initialState = {
    terms:null,
    tiles:[],
}


const homeReducer = (state = initialState, {
    type, payload
}) => {
    switch(type){
        case FETCH_TAC_DATA_REQUESTED:
            return {
                ...state,
                terms: null,
            }
        case FETCH_TAC_DATA_SUCCESS:
            return {
                ...state,
                terms: payload,
            }
        case FETCH_TAC_DATA_FAILURE:
            return {
                ...state,
                terms: null,

            }
        case ACCEPT_TERMS_SUCCESS:
            return {
                ...state,
                terms:payload,
            }
        case FETCH_TILES_SUCCESS:
            return {
                ...state,
                tiles:payload,
            }
        case UPDATE_TAC:
            return {
                ...state,
                terms: payload,
            }
        default:
            return state;
    }
}

export default homeReducer;

