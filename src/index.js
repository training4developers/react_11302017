import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';

const colorList = [ 'red', 'blue', 'green', 'silver' ];

ReactDOM.render(
  <div>
    <ColorTool colors={colorList} />
    <ColorTool colors={colorList} />
  </div>,
    
  document.querySelector('#root'),
);

