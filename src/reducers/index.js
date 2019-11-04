import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import authReducer from './authReducer'
import alertReducers from './alertReducers';

export const init = () => {
 const reducer = combineReducers({
  auth: authReducer,
  alerts: alertReducers
 })
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))
 return store
}