const loading = (state = {

}, action) => {
    const  { type } = action;
    const matches = /(.*)_(REQUESTED|SUCCESS|FAILURE)/.exec(type);

    if(!matches) return state;

    const [, requestName, requestState ] = matches;

    if(['REQUESTED', 'SUCCESS', 'FAILURE'].indexOf(requestState) > -1){
        return {
            ...state,
            [requestName]: requestState.toLowerCase(),
        }
    }

    return state;
}

export default loading;