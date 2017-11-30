import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    const headerText = 'Color Tool';

    return (
      <div>
        <header>
          <h1>{headerText.toUpperCase()}</h1>
        </header>
        <ul>
          <li>red</li>
          <li>blue</li>
          <li>green</li>
        </ul>
      </div>
    );
  }

}