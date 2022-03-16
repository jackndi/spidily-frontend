import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { setToken } from "./features/auth/tokenSlice";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// Authentication
// Set token stored in the local storage
const token = store.getState().token;
if (!token.token) {
  // attempt to look for it in Local Storage
  const localToken = localStorage.getItem("spidily-auth");
  if (localToken) store.dispatch(setToken(JSON.parse(localToken)));
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
