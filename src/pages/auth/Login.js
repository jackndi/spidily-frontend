import React, { useState } from "react";

import { useRetrieveTokenMutation } from "../../services/auth/tokenAPI";

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../features/auth/tokenSlice";
import { Navigate } from "react-router-dom";
import config from "../../config";

function Login() {
  const [retrieveToken, { isLoading, data, error, isSuccess }] =
    useRetrieveTokenMutation();

  const autToken = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // set token local storage
  if (isSuccess) {
    // set the token in the state
    dispatch(setToken(data));

    return <Navigate to={config.LOGIN_REDIRECT} />;
  }

  const handleSubmitlogin = (e) => {
    e.preventDefault();
    retrieveToken({ username, password });
  };

  return (
    <div>
      {isLoading && <h1>Is Loading...</h1>}
      {error && <h1>Is error...{JSON.stringify(error)}</h1>}
      {autToken.token && <p> {JSON.stringify(autToken)}</p>}

      <form onSubmit={handleSubmitlogin}>
        <input
          type="text"
          value={username}
          placeholder="Enter Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
