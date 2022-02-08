import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Backdrop from '../UI/Backdrop';

import classes from './LightBoxGallery.module.scss';

import { ReactComponent as CloseIcon } from '../../icons/icon-close.svg';

export default class LightBoxGallery extends Component {
  render() {
    return ReactDOM.createPortal(
      <>
        <Backdrop />
        <div className={classes['lightbox-gallery-container']}>
          <div className={classes['lightbox-gallery']}>
            <CloseIcon
              className={classes['lightbox-gallery__close']}
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
