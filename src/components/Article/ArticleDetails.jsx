import React, { Component } from 'react';

import classes from './ArticleDetails.module.scss';

import { ReactComponent as CartIcon } from '../../icons/icon-cart.svg';
import { ReactComponent as AddIcon } from '../../icons/icon-plus.svg';
import { ReactComponent as RemoveIcon } from '../../icons/icon-minus.svg';

export default class ArticleDetails extends Component {
  constructor() {
    super();
    this.state = {
      productQty: 0,
    };
  }

  increaseQtyHandler() {
    this.setState((prevState) => ({ productQty: prevState.productQty + 1 }));
  }
  decreaseQtyHandler() {
    this.setState((prevState) =>
      prevState.productQty > 0
        ? { productQty: prevState.productQty - 1 }
        : prevState
    );
  }

  render() {
    return (
      <div className={classes['article-details']}>
        <p className={classes['article-details__company']}>Sneaker Company</p>
        <h1 className={classes['article-details__title']}>
          Fall Limited Edition Sneakers
        </h1>
        <p className={classes['article-details__description']}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className={classes['article-details__price']}>
          <div className={classes['article-details__price--current']}>
            <p className={classes['article-details__price--current__value']}>
              $125.00
            </p>
            <span
              className={classes['article-details__price--current__discount']}
            >
              50%
            </span>
          </div>
          <p className={classes['article-details__price--old']}>$250.00</p>
        </div>

        <div className={classes['article-details__actions']}>
          <div className={classes['article-details__actions__qty']}>
            <button
              className={classes['article-details__actions__qty__btn']}
              onClick={this.decreaseQtyHandler.bind(this)}
            >
              <RemoveIcon />
            </button>
            <span className={classes['article-details__actions__qty__value']}>
              {this.state.productQty}
            </span>
            <button
              className={classes['article-details__actions__qty__btn']}
              onClick={this.increaseQtyHandler.bind(this)}
            >
              <AddIcon />
            </button>
          </div>
          <button className={classes['article-details__actions__cart-btn']}>
            <CartIcon
              className={classes['article-details__actions__cart-btn__icon']}
            />
            Add to cart
          </button>
        </div>
      </div>
    );
  }
}
