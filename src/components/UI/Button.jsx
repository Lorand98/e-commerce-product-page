import React, { Component } from 'react';

import classes from './Button.module.scss';

export default class Button extends Component {
  render() {
    return (
      <button className={classes['button']} onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}
