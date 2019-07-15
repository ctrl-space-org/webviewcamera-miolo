import React, { useState } from 'react';
import Camera from './Camera';

import './App.css';

window.benoit = {};

export default function App() {
  const [code, setCode] = useState('');

  window.benoit.readCode = code => {
    setCode(code);
  };

  return (
    <div className="App">
      <Camera code={code} />
    </div>
  );
}
