import * as React from 'react';

export class DataTable extends React.Component {

  render() {
    return <table>
      <thead>
        {this.props.cols.map(col => <th>{col.header.slice(0,1).toUpperCase() + col.header.slice(1)}</th>)}
      </thead>
      <tbody>
        {this.props.data.map(item => <tr>
          {this.props.cols.map(col => <td>{item[col.field]}</td>)}
        </tr>)}
      </tbody>
    </table>;
  }
}