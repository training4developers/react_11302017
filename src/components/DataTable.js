import * as React from 'react';

import { DataRow } from './DataRow';
 
export class DataTable extends React.Component {

  render() {
    return <table>
      <thead>
        <tr>
          {this.props.cols.map( (col, i) => <th key={i}>{col.header.slice(0,1).toUpperCase() + col.header.slice(1)}</th>)}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {this.props.data.map(item =>
          <DataRow key={item.id} item={item} cols={this.props.cols} onDelete={this.props.onDelete} />)}
      </tbody>
    </table>;
  }
}