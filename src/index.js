import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/style.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { rootReducer } from "./redux/rootReducer";
import thunk from 'redux-thunk';
import {makeServer} from './services/server';
makeServer()

export const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
		<Router>
			<Provider store={store}>
				<App />
			</Provider>
		</Router>
	// </React.StrictMode>
);
