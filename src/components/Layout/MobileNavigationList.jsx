import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './MobileNavigationList.module.scss';

import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';
import Backdrop from '../UI/Backdrop';

export default class MobileNavigationList extends Component {
  render() {
    return ReactDOM.createPortal(
      <div
        className={`${classes['mobile-navlist-container']} ${this.props.className}`}
      >
        <Backdrop />
        <div className={classes['mobile-navlist-overlay']}>
          <CloseIcon onClick={this.props.onClose} />
          <ul className={classes['mobile-navlist']}>{this.props.children}</ul>
        </div>
      </div>,
      document.getElementById('overlays')
    );
  }
}
