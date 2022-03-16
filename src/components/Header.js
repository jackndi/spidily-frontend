import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { removeToken } from "../features/auth/tokenSlice";

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.token.token);

  const handleLogout = () => {
    dispatch(removeToken());
  };

  return (
    <div>
      <ul>
        <li>Company Logo</li>
        {isAuthenticated && (
          <li>
            <button onClick={handleLogout}>logout</button>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
