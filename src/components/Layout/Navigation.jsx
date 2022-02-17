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
import Cart from '../Cart/Cart';

class Navigation extends Component {
  constructor() {
    super();
    this.state = {
      showMobileNav: false,
      showCart: false,
    };
  }

  toggleMobileNav() {
    this.setState((prevState) => ({
      showMobileNav: !prevState.showMobileNav,
    }));
  }

  toggleCart() {
    this.setState((prevState) => ({
      showCart: !prevState.showCart,
    }));
  }

  navigationList = (
    <>
      <li className={classes['navigation-list__item']}>
        <a className={classes['navigation-list__item__link']} href='/#'>
          Collections
        </a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a className={classes['navigation-list__item__link']} href='/#'>
          Men
        </a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a className={classes['navigation-list__item__link']} href='/#'>
          Women
        </a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a className={classes['navigation-list__item__link']} href='/#'>
          About
        </a>
      </li>
      <li className={classes['navigation-list__item']}>
        <a className={classes['navigation-list__item__link']} href='/#'>
          Contact
        </a>
      </li>
    </>
  );

  render() {
    return (
      <nav className={classes['navigation']}>
        <div className={classes['navigation-list-container']}>
          <div className={classes['navigation-list-container__start']}>
            <MenuIcon
              onClick={this.toggleMobileNav.bind(this)}
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
                onClose={this.toggleMobileNav.bind(this)}
                show={state}
              >
                {this.navigationList}
              </MobileNavigationList>
            )}
          </Transition>
        </div>
        <div className={classes['navigation__user-cart']}>
          <div className={classes['navigation__user-cart__cart-container']}>
            <CartIcon
              className={classes['navigation__user-cart__cart']}
              onClick={this.toggleCart.bind(this)}
            />
            <span className={classes['navigation__user-cart__cart-qty']}>
              {this.props.cart.totalQty}
            </span>
          </div>
          <div className={classes['navigation__user-cart__avatar-container']}>
            <img
              alt='User Profile'
              src={imgAvatarPath}
              className={classes['navigation__user-cart__avatar']}
            />
          </div>
          <Transition
            in={this.state.showCart}
            timeout={300}
            mountOnEnter
            unmountOnExit
          >
            {(state) => <Cart show={state} />}
          </Transition>
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
