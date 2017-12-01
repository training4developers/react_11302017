import * as React from 'react';

import { DataRow } from './DataRow';
 
export class DataTable extends React.Component {

  render() {
    return <table>
      <thead>
        {this.props.cols.map(col => <th>{col.header.slice(0,1).toUpperCase() + col.header.slice(1)}</th>)}
        <th>Action</th>
      </thead>
      <tbody>
        {this.props.data.map(item =>
          <DataRow item={item} cols={this.props.cols} onDelete={this.props.onDelete} />)}
      </tbody>
    </table>;
  }
}