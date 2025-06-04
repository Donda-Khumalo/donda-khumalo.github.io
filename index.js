import React from 'react';
import ReactDOM from 'react-dom/client';
import Project_list from './src/Projects/index.jsx';
 // Optional global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Project_list />
  </React.StrictMode>
);