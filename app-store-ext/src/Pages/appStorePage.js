import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppStoreGrid, AppStoreHeader } from '../Components/AppStorePage';

const rootDiv = ReactDOM.createRoot(document.getElementById('app'));

rootDiv.render(
  <React.StrictMode>
    <AppStoreHeader/>
    <AppStoreGrid />
  </React.StrictMode>
);
