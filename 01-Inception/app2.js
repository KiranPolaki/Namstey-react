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
      <img
        className="res-logo"
        src="https://t3.ftcdn.net/jpg/01/96/80/24/360_F_196802485_VQxk0qmyPGTq56rKYXGikVGApD3A7v5T.jpg"
        alt="res-logo"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.5 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
}

function Body() {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
        <ResCard />
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
