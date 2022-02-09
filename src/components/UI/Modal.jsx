import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Backdrop from './Backdrop';

import classes from './Modal.module.scss';

import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';

export default class Modal extends Component {
  render() {
    return ReactDOM.createPortal(
      <>
        <Backdrop />
        <div className={classes['modal-container']}>
          <div className={classes['modal']}>
            <CloseIcon
              className={classes['modal__close']}
              onClick={this.props.onClose}
            />
            {this.props.children}
          </div>
        </div>
      </>,
      document.getElementById('overlays')
    );
  }
}
