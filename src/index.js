import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';

const colorList = [
  { name: 'red', hexCode: '#ff0000' },
  { name: 'blue', hexCode: '#0000ff' },
  { name: 'green', hexCode: '#00ff00' },
];

ReactDOM.render(
  <ColorTool colors={colorList} />,
  document.querySelector('#root'),
);

