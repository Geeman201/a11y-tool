import React from 'react';
import ReactDOM from 'react-dom';
import App from './browser/App';

//  Self Bootstrap
const div = document.createElement('div');
div.id = 'a11y-tool';
document.body.appendChild(div);

ReactDOM.render(
  <App />,
  document.getElementById('a11y-tool')
);
