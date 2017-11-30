import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    const headerText = 'Color Tool';

    // Object.freeze(this.props)
    // console.log(Object.isFrozen(this.props));

    // never do these operations
    // this.props.message = 'Hope and Peace!';
    // this.props.colors = [];
    // delete this.props.colors
    // this.props.colors.push('brown');

    return (
      <div>
        <header>
          <h1>{headerText.toUpperCase()}</h1>
        </header>
        <ul>
          {this.props.colors.map(color =>  <li>{color}</li>)}
        </ul>
      </div>
    );
  }

}