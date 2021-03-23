import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers/apiReducer';
import {logger,createLogger} from 'redux-logger'
import thunk from "redux-thunk";


// const reducer = combineReducers(priceReducer);
const middleware = [
	thunk,
	logger
	// more middleware
];


// const rootReducer = combineReducers(
//     // { count: countReducer },
//     {priceReducer}
// );
const configureStore = () => {
    return createStore(rootReducer,applyMiddleware(logger));

}
export default configureStore;

