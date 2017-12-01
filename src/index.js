import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';

const colorList = [
  { id: 1, name: 'red', hexCode: '#ff0000' },
  { id: 2, name: 'blue', hexCode: '#0000ff' },
  { id: 3, name: 'green', hexCode: '#00ff00' },
];

ReactDOM.render(
  <ColorTool colors={colorList} />,
  document.querySelector('#root'),
);

