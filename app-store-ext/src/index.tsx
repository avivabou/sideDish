import React from 'react';
import ReactDOM from 'react-dom/client';

const root = document.createElement("div")
root.className = "container"
document.body.appendChild(root)
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <div>
      AppStore Extension
    </div>
  </React.StrictMode>
);