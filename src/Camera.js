import React from 'react';
import logo from './logo.svg';

export default function Camera({ code }) {
  const openCamera = () => {
    window.ReactNativeWebView.postMessage('camera');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{code || 'Nenhum código'}</p>
        <button style={{ padding: 20 }} type="button" onClick={openCamera}>
          Open Camera
        </button>
      </header>
    </div>
  );
}
