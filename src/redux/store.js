import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const composedEnhancer = compose(applyMiddleware(sagaMiddleware));

const store = createStore(reducers, composedEnhancer);

sagaMiddleware.run(rootSaga);

export default store;