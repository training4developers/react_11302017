import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';

const colorList = [ 'red', 'blue', 'green', 'silver' ];

ReactDOM.render(
  <ColorTool colors={colorList} />,
  document.querySelector('#root'),
);

