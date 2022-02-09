import React, { Component } from 'react';

import classes from './Photobox.module.scss';
import { ReactComponent as PrevIcon } from '../../icons/icon-previous.svg';
import { ReactComponent as NextIcon } from '../../icons/icon-next.svg';

export default class Photobox extends Component {
  render() {
    const onlyPhoneNavigationClass = this.props.onlyPhoneNavigation
      ? classes['photobox__switch-btn--phone']
      : '';
    return (
      <div className={classes['photobox']}>
        <button
          className={`${classes['photobox__switch-btn']} ${classes['photobox__prev-btn']} ${onlyPhoneNavigationClass}`}
          onClick={this.props.onPrev}
        >
          <PrevIcon />
        </button>
        {this.props.children}
        <button
          className={`${classes['photobox__switch-btn']} ${classes['photobox__next-btn']} ${onlyPhoneNavigationClass}`}
          onClick={this.props.onNext}
        >
          <NextIcon />
        </button>
      </div>
    );
  }
}
