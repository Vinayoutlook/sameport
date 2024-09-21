import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            thunk: false,
        }).prepend(sagaMiddleware);
    },
    reducer: rootReducer,
})

sagaMiddleware.run(rootSaga)

export default store;