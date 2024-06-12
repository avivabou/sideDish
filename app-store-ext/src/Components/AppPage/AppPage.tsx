import React from 'react';
import './AppPage.css';
import { MessagesAPI } from '../../Apis/Messages';
import { AppItem } from '../../Types/AppItem';


interface AppPageProps {
    appItem: AppItem;
}

const LeftPanel: React.FC = () => (
  <div className="left-panel">
    <h2>Left Panel</h2>
    {/* Add more content here as needed */}
  </div>
);

const AppPage: React.FC<AppPageProps> = ({ appItem }) => (
  <div className="app-page">
    <div className="top-container">
      <button className="back-button" onClick={() => MessagesAPI.open.appStore(false)}>&lt; back to all apps</button>
    </div>
    <LeftPanel />
    <iframe className="app-view-iframe" src={appItem.url} title="App Iframe"></iframe>
  </div>
);

export default AppPage;
