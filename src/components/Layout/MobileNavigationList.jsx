import React, { Component } from 'react';
import reactDom from 'react-dom';

import classes from './MobileNavigationList.module.scss';

import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';

export default class MobileNavigationList extends Component {
  render() {
    return reactDom.createPortal(
      <div
        className={`${classes['mobile-navlist-container']} ${this.props.className}`}
      >
        <div className={classes['backdrop']}></div>
        <div className={classes['mobile-navlist-overlay']}>
          <CloseIcon onClick={this.props.onClose} />
          <ul className={classes['mobile-navlist']}>{this.props.children}</ul>
        </div>
      </div>,
      document.getElementById('overlays')
    );
  }
}
