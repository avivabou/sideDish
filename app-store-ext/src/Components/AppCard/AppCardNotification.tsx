import React from 'react';
import { AppItemNotification, AppItemNotificationStyle, AppItemNotificationColor } from '../../Types/AppItem';
import './appCardNotification.css';

type AppCardNotificationProps = AppItemNotification

const AppCardNotification: React.FC<AppCardNotificationProps> = ({ text, color, style }) => {
    const notificationColor = color === AppItemNotificationColor.blue ? 'blue' : 'red';

    const renderStyle = () => {
        switch (style) {
            case AppItemNotificationStyle.bookmark:
                return (
                    <div className="app-card-notification-bookmark" style={{ backgroundColor: notificationColor }}>
                        {text}
                    </div>
                );
            case AppItemNotificationStyle.cornerBend:
                return (
                    <div className="app-card-notification-corner-band" style={{ backgroundColor: notificationColor }}>
                        {text}
                    </div>
                );
            default:
                return null;
        }
    };

    return renderStyle();
};

export default AppCardNotification;
