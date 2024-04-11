import { useState } from "react";
import { LOGO_URL } from "../utils/config.js";
function Header() {
  const [loginBtn, setLoginButton] = useState("Login");

  console.log("Header Rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              setLoginButton("Logout");
            }}
          >
            Login
          </button>
        </ul>
      </div>
    </div>
  );
}
export { Header };
