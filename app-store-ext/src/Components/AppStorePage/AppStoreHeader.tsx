import React, { useEffect, useState } from 'react';
import './appStoreHeader.css';
import { MessagesAPI } from '../../Apis/Messages';

const AppStoreHeader: React.FC = () => {
  const [logoHTML, setLogoHTML] = useState<string>();

  useEffect(() => {
    (async () => {
      if (!logoHTML) {
        const appLogo = await MessagesAPI.appLogo.get();
        setLogoHTML(appLogo);
      }
    })();
  }, [logoHTML]);


  return (
    <div className="header">
      {logoHTML ? (
        <div className='app-logo' dangerouslySetInnerHTML={{ __html: logoHTML }}></div>
      ) : null}
      <div className="header-title">App Store</div>
    </div>
  );
};

export default AppStoreHeader;
