import React, { useState } from "react";
import ReactDOM from "react-dom/client";

// * Just wanted to Test things here
function AppLayout() {
  const [whatever, setWhatever] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setWhatever(!whatever);
        }}
      >
        {whatever ? "This is true whatever" : "This is false whatever"}
      </button>
    </>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
