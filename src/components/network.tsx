import React, { useState } from 'react';

export default function NetworkStatus() {

  const [networkOnline, setNetworkStatusOnline] = useState(false);
  
  const handleNetworkChange = (online: boolean) => {
    setNetworkStatusOnline(online);
  }

  return (
      networkOnline ? 
        <div>
          Online
        </div>
      : 
        <div>
          Offline
        </div>
  );
};