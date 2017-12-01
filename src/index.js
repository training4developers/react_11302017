import * as React from 'react';
import * as ReactDOM from 'react-dom';

const colors = [ 'red', 'blue', 'green' ];

let counter = 0;


class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.counter = counter++;
    this.state = { item: props.item };
    console.log('constructor list item: ' + this.counter);
  }

  render() {
    console.log('render list item: ' + this.counter);
    return <li>Prop: {this.props.item}, State: {this.state.item}</li>;
  }

  componentWillUnmount() {
    console.log('component will unmount list item: ' + this.counter);
  }
}

class ItemList extends React.Component {
  render() {
    console.log('render item list');
    return <ul>
      {this.props.items.map( (item, i) => <ListItem item={item} key={item} />)}
    </ul>;
  }
}

ReactDOM.render(<ItemList items={colors} />, document.querySelector('#root'));

setTimeout(() => {
  colors.splice(1, 1);
  ReactDOM.render(<ItemList items={colors} />, document.querySelector('#root'));
}, 4000);

