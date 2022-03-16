import React from "react";
import { useDispatch } from "react-redux";

import { removeToken } from "../features/auth/tokenSlice";

function Header() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(removeToken());
  };

  return (
    <div>
      <ul>
        <li>Company Logo</li>
        <li>
          <button onClick={handleLogout}>logout</button>
        </li>
      </ul>
    </div>
  );
}

export default Header;
