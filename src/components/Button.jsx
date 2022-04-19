import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  render() {
    const { label, operation, double, triple, click } = this.props;
    return (
        <button
          onClick={e => click && click(label)} 
          className={`
            button
            ${operation ? 'operation' : ''}
            ${double ? 'double' : ''}
            ${triple ? 'triple' : ''}
        `}>
          { label }
        </button>
    );
  }
}

export default Button;