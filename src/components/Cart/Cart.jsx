import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Cart.module.scss';
import actions from '../../store/actions';

import { ReactComponent as DeleteIcon } from '../../icons/icon-delete.svg';

import Button from '../UI/Button';

class Cart extends Component {
  render() {
    const prodImages = require.context('../../images/products', true);

    return (
      <div className={classes['cart']}>
        <div className={classes['cart__header']}>Cart</div>
        <div className={classes['cart__content']}>
          {this.props.cart.totalQty === 0 ? (
            <p className={classes['cart__content__empty-msg']}>
              Your cart is empty.
            </p>
          ) : (
            <div className={classes['cart__content__checkout']}>
              <ul className={classes['cart__content__checkout__list']}>
                {this.props.cart.items.map((item) => {
                  return (
                    <li
                      className={classes['cart__content__checkout__list-item']}
                      key={item.id}
                    >
                      <img
                        className={
                          classes['cart__content__checkout__list-item__img']
                        }
                        src={prodImages(`./${item.imgFileName}`)}
                        alt='Product'
                      />
                      <h2
                        className={
                          classes['cart__content__checkout__list-item__name']
                        }
                      >
                        {item.name}
                      </h2>
                      <p
                        className={
                          classes['cart__content__checkout__list-item__price']
                        }
                      >
                        {`$${item.price} x ${item.qty}  `}
                        <span
                          className={
                            classes[
                              'cart__content__checkout__list-item__price__total'
                            ]
                          }
                        >
                          ${Number(item.price * item.qty).toFixed(2)}
                        </span>
                      </p>
                      <button
                        className={
                          classes[
                            'cart__content__checkout__list-item__delete-btn'
                          ]
                        }
                        onClick={this.props.removeFromCart.bind(this, item.id)}
                      >
                        <DeleteIcon />
                      </button>
                    </li>
                  );
                })}
              </ul>

              <Button>Checkout</Button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (productId) => dispatch(actions.removeFromCart(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
