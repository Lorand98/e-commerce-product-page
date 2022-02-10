import React, { Component } from 'react';

import classes from './Backdrop.module.scss';

export default class Backdrop extends Component {
  render() {
    console.log([classes['backdrop'], this.props.className].join(' '));
    return (
      <div
        className={[classes['backdrop'], this.props.className].join(' ')}
      ></div>
    );
  }
}
