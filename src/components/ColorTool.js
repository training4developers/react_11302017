import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    const headerText = 'Color Tool';

    const colors = [ 'red', 'blue', 'green' ];

    return (
      <div>
        <header>
          <h1>{headerText.toUpperCase()}</h1>
        </header>
        <ul>
          {colors.map(color =>  <li>{color}</li>)}
        </ul>
      </div>
    );
  }

}