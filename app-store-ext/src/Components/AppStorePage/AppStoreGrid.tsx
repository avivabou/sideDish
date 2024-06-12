import React from 'react';
import AppCard from '../AppCard/AppCard';
import './appStorePage.css';
import { APPS } from '../../Utils/Constants';

const AppStoreGrid: React.FC = () => {
    return (
        <div className="apps-grid">
            {APPS.map(item => (
                <AppCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default AppStoreGrid;
