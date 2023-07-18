import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerReducer, routerMiddleware } from "react-router-redux";

import * as scoreboard from "./scoreboard/scoreboard";

export default function configStore(history, initialState) {
	const reducers = {
		scoreboard: scoreboard.reducer,
	};

	const middleware = [thunk, routerMiddleware(history)];

	const enhancers = [];
	const isDevelopment = /* process.env.NODE_ENV */ "development";
	if (
		isDevelopment &&
		typeof window !== "undefined" &&
		window.devToolsExtension
	) {
		enhancers.push(window.devToolsExtension());
	}
	const rootReducer = combineReducers({
		...reducers,
		routing: routerReducer,
	});

	return createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers)
	);
}
