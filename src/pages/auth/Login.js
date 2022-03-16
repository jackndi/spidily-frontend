import React, { useEffect, useState } from "react";

import { useRetrieveTokenMutation } from "../../services/auth/tokenAPI";

import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../features/auth/tokenSlice";
import { useNavigate } from "react-router-dom";
import config from "../../config";

function Login() {
  const [retrieveToken, { isLoading, data, error, isSuccess }] =
    useRetrieveTokenMutation();

  const autToken = useSelector((state) => state.token);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [value, setValue] = useState({ username: "", password: "" });

  useEffect(() => {
    if (isSuccess) {
      // set the token in the state
      dispatch(setToken(data));
      navigate(config.LOGIN_REDIRECT);
    }
  }, [isSuccess, data, dispatch, navigate]);

  const handleInput = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    retrieveToken(value);
  };

  return (
    <div>
      {isLoading && <h1>Is Loading...</h1>}
      {error && <h1>Is error...{JSON.stringify(error)}</h1>}
      {autToken.token && <p> Already authenticated!</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value.username}
          name="username"
          placeholder="Enter Username"
          onChange={handleInput}
        />
        <br />
        <input
          type="password"
          name="password"
          value={value.password}
          placeholder="Enter Password"
          onChange={handleInput}
        />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
