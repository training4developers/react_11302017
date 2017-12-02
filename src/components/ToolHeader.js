import * as React from 'react';
import * as PropTypes from 'prop-types';

export const ToolHeader = props =>
  <header>
    <h1>{props.headerText}</h1>
  </header>;

ToolHeader.propTypes = {
  headerText: PropTypes.string,
};

ToolHeader.defaultProps = {
  headerText: 'App Header',
};

// export const ToolHeader = props => {
//   return <header>
//     <h1>{props.headerText}</h1>
//   </header>;
// };


// export class ToolHeader extends React.Component {
  
//     render() {
//       return <header>
//         <h1>{this.props.headerText}</h1>
//       </header>;
//     }
//   }