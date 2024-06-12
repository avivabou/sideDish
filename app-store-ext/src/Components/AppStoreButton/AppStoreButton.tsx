import React from 'react';

type AppStoreButtonProps = {onClick: React.DOMAttributes<HTMLButtonElement>['onClick']};

const AppStoreButton = ({onClick}: AppStoreButtonProps) => {
  return (
    <button
      id="appStoreButton"
      style={{
        padding: '12px',
        cursor: 'pointer'
      }}
      onClick={onClick}
    >
      App Store
    </button>
  );
};

export default AppStoreButton;
