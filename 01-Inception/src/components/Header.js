import { useState } from "react";
import { LOGO_URL } from "../utils/config.js";
import { Link } from "react-router-dom";

function Header() {
  const [loginBtn, setLoginButton] = useState(true);

  console.log("Header Rendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          {/* client side routing */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              setLoginButton(!loginBtn);
            }}
          >
            {loginBtn ? "Login" : "Logout"}
          </button>
        </ul>
      </div>
    </div>
  );
}
export { Header };
