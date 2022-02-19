import React, { Component } from 'react';

import classes from './ArticleDetails.module.scss';

import { ReactComponent as CartIcon } from '../../icons/icon-cart.svg';
import { ReactComponent as AddIcon } from '../../icons/icon-plus.svg';
import { ReactComponent as RemoveIcon } from '../../icons/icon-minus.svg';

import actions from '../../store/actions';
import { connect } from 'react-redux';
import Button from '../UI/Button';

class ArticleDetails extends Component {
  constructor() {
    super();
    this.state = {
      qty: 0,
      name: 'Fall Limited Edition Sneakers',
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      oldPrice: Number(250).toFixed(2),
      discount: 50,
      currPrice: Number(125).toFixed(2),
      imgFileName: 'image-product-1-thumbnail.jpg',
    };
  }

  increaseQtyHandler() {
    this.setState((prevState) => ({ qty: prevState.qty + 1 }));
  }
  decreaseQtyHandler() {
    this.setState((prevState) =>
      prevState.qty > 0 ? { qty: prevState.qty - 1 } : prevState
    );
  }

  addToCartHandler() {
    if (this.state.qty > 0) {
      this.props.addToCart({
        id: 'prod1',
        name: this.state.name,
        price: this.state.currPrice,
        qty: this.state.qty,
        imgFileName: this.state.imgFileName,
      });

      this.setState({
        qty: 0,
      });
    }
  }

  render() {
    return (
      <div className={classes['article-details']}>
        <p className={classes['article-details__company']}>Sneaker Company</p>
        <h1 className={classes['article-details__title']}>{this.state.name}</h1>
        <p className={classes['article-details__description']}>
          {this.state.description}
        </p>
        <div className={classes['article-details__price']}>
          <div className={classes['article-details__price--current']}>
            <p className={classes['article-details__price--current__value']}>
              {`$${this.state.currPrice}`}
            </p>
            <span
              className={classes['article-details__price--current__discount']}
            >
              {`${this.state.discount}%`}
            </span>
          </div>
          <p
            className={classes['article-details__price--old']}
          >{`$${this.state.oldPrice}`}</p>
        </div>

        <div className={classes['article-details__actions']}>
          <div className={classes['article-details__actions__qty']}>
            <button
              className={classes['article-details__actions__qty__btn']}
              onClick={this.decreaseQtyHandler.bind(this)}
              aria-label='decrease'
            >
              <RemoveIcon />
            </button>
            <span
              className={classes['article-details__actions__qty__value']}
              data-testid='test-quantity'
            >
              {this.state.qty}
            </span>
            <button
              className={classes['article-details__actions__qty__btn']}
              onClick={this.increaseQtyHandler.bind(this)}
              aria-label='increase'
            >
              <AddIcon />
            </button>
          </div>
          <Button
            className={classes['article-details__actions__cart-btn']}
            onClick={this.addToCartHandler.bind(this)}
          >
            <CartIcon
              className={classes['article-details__actions__cart-btn__icon']}
            />
            Add to cart
          </Button>
        </div>
      </div>
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
    addToCart: (product) => {
      dispatch(actions.addToCart(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetails);
