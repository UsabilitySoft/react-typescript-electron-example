import React from 'react';
import ReactDom from 'react-dom';

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