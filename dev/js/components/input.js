import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
  }

  componentWillUpdate(nextProps, {inputValue}) {
    this.props.onChange(inputValue);
  }

  onChange(inputValue) {
    this.setState({inputValue});
  }

  render() {
    return (<input type={this.props.type || 'text'}
                   className={this.props.className || ''}
                   placeholder={this.props.placeholder || ''}
                   onChange={e => this.onChange(e.target.value)}/>);
  }
}