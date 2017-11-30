import * as React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  render() {
    const headerText = 'Color Tool';
    return (
      <div>
        <header>
          <h1>{headerText.toUpperCase()}</h1>
        </header>
        <ul>
          {this.props.colors.map(color =>  <li>{color}</li>)}
        </ul>
        <form>
          <div>
            <label htmlFor="new-color-input">New Color</label>
            <input type="text" id="new-color-input" name="newColor"
              value={this.state.newColor} onChange={this.onChange} />
          </div>
        </form>
      </div>
    );
  }

}