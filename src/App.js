import { useEffect } from "react";
import "./App.css";
import { useRetrieveTokenMutation } from "./services/auth/tokenAPI";

function App() {
  const [retrieveToken, { isLoading, data, error }] =
    useRetrieveTokenMutation();

  useEffect(() => {
    retrieveToken({ username: "jack", password: "jackpass" });
  }, [retrieveToken]);

  return (
    <div>
      <h1>Hello World</h1>

      {isLoading && <h1>Is Loading...</h1>}
      {error && <h1>Is error...{JSON.stringify(error)}</h1>}
      {data && <p> {JSON.stringify(data)}</p>}
    </div>
  );
}

export default App;
