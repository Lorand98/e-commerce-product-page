import { Component } from 'react';
import classes from './Navigation.module.scss';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as Cart } from '../../icons/icon-cart.svg';

import imgAvatarPath from '../../images/image-avatar.png';

class Navigation extends Component {
  render() {
    return (
      <nav className={classes['navigation']}>
        <div className={classes['navigation-list-container']}>
          <Logo />
          <ul className={classes['navigation-list']}>
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className={classes['navigation__user-cart']}>
          <Cart className={classes['navigation__user-cart__cart']} />
          <div className={classes['navigation__user-cart__avatar-container']}>
            <img
              alt='User Profile'
              src={imgAvatarPath}
              className={classes['navigation__user-cart__avatar']}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
