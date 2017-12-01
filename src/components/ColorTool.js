import * as React from 'react';

import { ToolHeader } from './ToolHeader';
import { DataTable } from './DataTable';
import { ColorForm } from './ColorForm';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.colors.concat(),
    };

    this.addColor = this.addColor.bind(this);
  }

  addColor(newColor) {
    this.setState({
      colors: this.state.colors.concat(newColor),
    });
  }

  render() {

    const cols = [
      { field: 'name', header: 'Name' },
      { field: 'hexCode', header: 'RGB' },
    ];

    return (
      <div>
        <ToolHeader headerText="Color Tool" />
        <DataTable data={this.state.colors} cols={cols} />
        <ColorForm onSubmitColor={this.addColor} />
      </div>
    );
  }

}