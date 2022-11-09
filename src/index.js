import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BookProvider } from './Components/Context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>
);

reportWebVitals();
