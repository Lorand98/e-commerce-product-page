import { Component } from 'react';
import classes from './Navigation.module.scss';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as CartIcon } from '../../icons/icon-cart.svg';
import { ReactComponent as MenuIcon } from '../../icons/icon-menu.svg';

import imgAvatarPath from '../../images/image-avatar.png';
import MobileNavigationList from './MobileNavigationList';
import { Transition } from 'react-transition-group';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      showMobileNav: false,
    };
  }

  changeShowMobileNav() {
    this.setState((prevState) => ({
      showMobileNav: !prevState.showMobileNav,
    }));
  }

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
          <div className={classes['navigation-list-container__start']}>
            <MenuIcon
              onClick={this.changeShowMobileNav.bind(this)}
              className={classes['navigation-list-container__start__menu']}
            />
            <Logo
              className={classes['navigation-list-container__start__logo']}
            />
          </div>

          <ul className={classes['navigation-list']}>{this.navigationList}</ul>

          <Transition
            in={this.state.showMobileNav}
            timeout={300}
            mountOnEnter
            unmountOnExit
          >
            {(state) => (
              <MobileNavigationList
                onClose={this.changeShowMobileNav.bind(this)}
                show={state}
              >
                {this.navigationList}
              </MobileNavigationList>
            )}
          </Transition>
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
