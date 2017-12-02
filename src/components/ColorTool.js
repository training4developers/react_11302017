import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ToolHeader } from './ToolHeader';
import { DataTable } from './DataTable';
import { ColorForm } from './ColorForm';

export class ColorTool extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      hexCode: PropTypes.string.isRequired,
    })).isRequired,
  };

  static defaultProps = {
    colors: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      colors: this.props.colors.concat(),
    };
  }

  addColor = (newColor) => {
    this.setState({
      colors: this.state.colors.concat({ ...newColor, id: Math.max(...this.state.colors.map(color => color.id)) + 1 }),
    });
  }

  deleteColor = (colorId) => {

    const colorIndex = this.state.colors.findIndex(color => color.id === colorId);

    this.setState({
      colors: [ ...this.state.colors.slice(0, colorIndex), ...this.state.colors.slice(colorIndex + 1) ],
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
        <DataTable data={this.state.colors} cols={cols} onDelete={this.deleteColor} />
        <ColorForm onSubmitColor={this.addColor} />
      </div>
    );
  }

}