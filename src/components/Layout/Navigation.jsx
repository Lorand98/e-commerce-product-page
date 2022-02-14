import { Component } from 'react';
import classes from './Navigation.module.scss';

import { ReactComponent as Logo } from '../../icons/logo.svg';
import { ReactComponent as CartIcon } from '../../icons/icon-cart.svg';
import { ReactComponent as MenuIcon } from '../../icons/icon-menu.svg';

import imgAvatarPath from '../../images/image-avatar.png';
import MobileNavigationList from './MobileNavigationList';
import { Transition } from 'react-transition-group';

import { connect } from 'react-redux';
import actions from '../../store/actions';

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
      <li className={classes['navigation-list__item']}>
        <a>Collections</a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a>Men</a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a>Women</a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a>About</a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a>Contact</a>
      </li>
    </>
  );

  render() {
    console.log(this.props.cart);
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

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (productId) => dispatch(actions.removeFromCart(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
