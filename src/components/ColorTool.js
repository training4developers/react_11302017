import * as React from 'react';

import { ToolHeader } from './ToolHeader';
import { DataTable } from './DataTable';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.colors.concat(),
      colorName: '',
      colorHexCode: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.type === 'number'
        ? Number(e.target.value)
        : e.target.value
    });
  }

  onClick() {
    this.setState({
      colors: this.state.colors.concat({
        name: this.state.colorName,
        hexCode: this.state.colorHexCode,
      }),
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
        
        <form>
          <div>
            <label htmlFor="color-name-input">Color Name:</label>
            <input type="text" id="color-name-input" name="colorName"
              value={this.state.colorName} onChange={this.onChange} />
          </div>
          <div>
            <label htmlFor="color-hexcode-input">Color HexCode:</label>
            <input type="text" id="color-hexcode-input" name="colorHexCode"
              value={this.state.colorHexCode} onChange={this.onChange} />
          </div>
          <button type="button" onClick={this.onClick}>Add Color</button>
        </form>
      </div>
    );
  }

}