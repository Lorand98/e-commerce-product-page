import { Component } from 'react';
import classes from './Navigation.module.scss';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as CartIcon } from '../../icons/icon-cart.svg';

import imgAvatarPath from '../../images/image-avatar.png';
import MobileNavigationList from './MobileNavigationList';

class Navigation extends Component {
  navigationList = (
    <>
      <li>Collections</li>
      <li>Men</li>
      <li>Women</li>
      <li>About</li>
      <li>Contact</li>
    </>
  );

  render() {
    return (
      <nav className={classes['navigation']}>
        <div className={classes['navigation-list-container']}>
          <Logo />
          <div className={classes['navigation-list-container--desktop']}>
            <ul className={classes['navigation-list']}>
              {this.navigationList}
            </ul>
          </div>
          <MobileNavigationList
            className={classes['navigation-list-container--mobile']}
          >
            {this.navigationList}
          </MobileNavigationList>
        </div>
        <div className={classes['navigation__user-cart']}>
          <CartIcon className={classes['navigation__user-cart__cart']} />
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
