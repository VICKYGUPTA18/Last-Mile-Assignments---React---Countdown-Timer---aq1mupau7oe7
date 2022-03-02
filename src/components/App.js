import React, { Component, useState, useEffect } from "react";
import "../styles/App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const handlekeyDown = (e) => {
    if (e.keyCode === 13) {
      if (isNaN(e.target.value)) {
        setCount(0);
      }
      setCount(parseInt(e.target.value));
    }
  };
  useEffect(() => {
    if (count > 0) {
      let interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [count]);

  return (
    <div className="wrapper">
      <div id="whole-center">
        <h1>
          Reverse countdown for
          <input
            id="timeCount"
            onKeyDown={(e) => {
              handlekeyDown(e);
            }}
          />{" "}
          sec.
        </h1>
      </div>
      <div id="current-time">{count}</div>
    </div>
  );
};

export default App;
