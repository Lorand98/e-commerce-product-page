import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import classes from './MobileNavigationList.module.scss';

import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';
import Backdrop from '../UI/Backdrop';

export default class MobileNavigationList extends Component {
  render() {
    const navlistOverlayCssClasses = [
      classes['mobile-navlist-overlay'],
      this.props.show === 'entering'
        ? classes['mobile-navlist-overlay--open']
        : this.props.show === 'exiting'
        ? classes['mobile-navlist-overlay--close']
        : '',
    ];

    const backdropCssClasses = [
      this.props.show === 'entering'
        ? classes['backdrop-open']
        : this.props.show === 'exiting'
        ? classes['backdrop-close']
        : '',
    ];

    return ReactDOM.createPortal(
      <>
        <Backdrop className={backdropCssClasses} />

        <div className={navlistOverlayCssClasses.join(' ')}>
          <CloseIcon onClick={this.props.onClose} />
          <ul className={classes['mobile-navlist']}>{this.props.children}</ul>
        </div>
      </>,
      document.getElementById('overlays')
    );
  }
}
