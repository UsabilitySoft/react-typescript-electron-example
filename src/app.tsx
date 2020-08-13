import React from 'react';
import ReactDom from 'react-dom';
import './styles.less';

import Dashboard from './components/trades/dashboard';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const App = () => {
  return (
    <div>
      <h1>
        Vercer Trades
      </h1>
      <Dashboard></Dashboard>
    </div>
  )
}
ReactDom.render(<App />, mainElement);