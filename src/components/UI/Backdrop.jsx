import React, { Component } from 'react';

import classes from './Backdrop.module.scss';

export default class Backdrop extends Component {
  render() {
    return <div className={classes['backdrop']}></div>;
  }
}
