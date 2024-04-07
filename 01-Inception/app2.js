import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://cdn.dribbble.com/users/1635051/screenshots/4291569/socio_curry_logo-01.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
}

function ResCard() {
  return (
    <div className="res-card">
      <h3>Meghana Foods</h3>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard />
      </div>
    </div>
  );
}

function AppLayout() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
