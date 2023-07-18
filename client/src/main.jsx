/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import { reducer } from "./store/scoreboard/scoreboard"; // Import your reducer

const history = createBrowserHistory({ basename: "" });
const initialState = window.initialReduxState;

// Create the configuration object for configureStore
const storeConfig = {
	reducer: {
		scoreboard: reducer, // Add your reducer to the configuration
	},
	preloadedState: initialState,
};

const store = configureStore(storeConfig); // Pass the configuration object to configureStore

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
