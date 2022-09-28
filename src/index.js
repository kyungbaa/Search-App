import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SearchProvider from './store/search';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SearchProvider>
    <App />
  </SearchProvider>
);
