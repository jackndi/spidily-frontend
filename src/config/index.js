import { store } from "../app/store";

const config = {
  BASE_URL: "http://localhost:8000/",
  LOGIN_REDIRECT: "/",
  AUTH_TOKEN: () => store.getState().token.token, // Get the token from the state
  IS_AUTHENTICATED: () => !!store.getState().token.token,
};

export default config;
