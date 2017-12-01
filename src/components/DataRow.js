import * as React from 'react';

export const DataRow = props => <tr>
   {props.cols.map(col => <td>{props.item[col.field]}</td>)}
   <td><button type="button" onClick={() => props.onDelete(props.item.id)}>Delete</button></td>
</tr>