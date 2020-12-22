import React from 'react';
import ReactDom from 'react-dom';
import './styles.less';
import { registerServiceWorker } from './helpers/service-worker';

import Dashboard from './components/trades/dashboard';
import NetworkStatus from './components/network';

const mainElement = document.getElementById('root');

const App = () => {
  registerServiceWorker();
  return (
    <div>
      <h1>
        Simple Trader PWA
      </h1>
      <NetworkStatus></NetworkStatus>
      <Dashboard></Dashboard>
    </div>
  )
}
ReactDom.render(<App />, mainElement);