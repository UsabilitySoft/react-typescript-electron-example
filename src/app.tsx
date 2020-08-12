import React from 'react';
import ReactDom from 'react-dom';
import './styles.less';

const mainElement = document.createElement('div');
document.body.appendChild(mainElement);
const App = () => {
  return (
    <div>
      <h1>
        Trade Data
      </h1>
    </div>
  )
}
ReactDom.render(<App />, mainElement);