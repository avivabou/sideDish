import './appCard.css';
import React from 'react';
import { AppItem } from '../../Types/AppItem';
import AppCardNotification from './AppCardNotification';
import { MessagesAPI } from '../../Apis/Messages';

const AppCard: React.FC<{ item: AppItem }> = ({ item }) => {
  const { id, title, description, icon, notification } = item;

  const onClick = () => {
    MessagesAPI.open.appPage(id)
  }

  return (
      <div onClick={onClick} className="app-card">
          <img src={icon} alt={`${title} icon`} className="app-card-icon" />
          <h2 className="app-card-title">{title}</h2>
          <p className="app-card-description">{description}</p>
          {notification && <AppCardNotification {...notification}/>}
      </div>
  );
};

export default AppCard;
