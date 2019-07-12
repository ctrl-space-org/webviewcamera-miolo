import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const openCamera = () => {
    window.ReactNativeWebView.postMessage("camera!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button style={{ padding: 20 }} type="button" onClick={openCamera}>
          Open Camera
        </button>
      </header>
    </div>
  );
}

export default App;
