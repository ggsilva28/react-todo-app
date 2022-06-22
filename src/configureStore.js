import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";
import { applyMiddleware, compose, createStore } from 'redux'
import Reducers from "./main/Reducers";

export default function configureStore(preloadedState) {

	const middlewares = [promise, thunk, multi];
	const middlewareEnhancer = applyMiddleware(...middlewares);

	const enhancers = [middlewareEnhancer];
	const composedEnhancers = compose(...enhancers);

	const store = createStore(Reducers, preloadedState, composedEnhancers);

	return store;
}
