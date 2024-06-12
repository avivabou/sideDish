import React from 'react';
import ReactDOM from 'react-dom';
import AppPage from '../Components/AppPage/AppPage';
import { APPS } from '../Utils/Constants';

const params = new URLSearchParams(window.location.search);
const appId = params.get('id');
const appItem = APPS.find(app => app.id === appId);

ReactDOM.render(
  <React.StrictMode>
    { appItem
      ? <AppPage appItem={appItem} />
      : <div>App not found</div> }
  </React.StrictMode>,
  document.getElementById('root')
);
