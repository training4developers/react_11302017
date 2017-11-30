import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/ColorTool';
import { CarTool } from './components/CarTool';


// ReactDOM.render(
//   React.createElement(ColorTool),
//   document.querySelector('#root'),
// );

ReactDOM.render(
  <CarTool />,
  document.querySelector('#root'),
);