import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import App from './App.jsx';
import './index.css'; // This should be imported before App.css

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
        <App />
        {/* <h1>hello</h1> */}

  </StrictMode>,
 
)
