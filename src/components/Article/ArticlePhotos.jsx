import React, { Component } from 'react';

import classes from './ArticlePhotos.module.scss';

import thumbnail1 from '../../images/products/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../images/products/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../images/products/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../images/products/image-product-4-thumbnail.jpg';
import photo1 from '../../images/products/image-product-1.jpg';
import photo2 from '../../images/products/image-product-2.jpg';
import photo3 from '../../images/products/image-product-3.jpg';
import photo4 from '../../images/products/image-product-4.jpg';

export default class ArticlePhotos extends Component {
  render() {
    return (
      <div className={classes['article-photos']}>
        <img
          alt='Shoe'
          src={photo1}
          className={classes['article-photos__main-photo']}
        />
        <div className={classes['article-photos__thumbnail-box']}>
          <div
            className={`${classes['article-photos__thumbnail-container']} ${classes['article-photos__thumbnail-container--selected']}`}
          >
            <img
              alt='Shoe'
              src={thumbnail1}
              className={classes['article-photos__thumbnail']}
            />
          </div>
          <div className={classes['article-photos__thumbnail-container']}>
            <img
              alt='Shoe'
              src={thumbnail2}
              className={classes['article-photos__thumbnail']}
            />
          </div>
          <div className={classes['article-photos__thumbnail-container']}>
            <img
              alt='Shoe'
              src={thumbnail3}
              className={classes['article-photos__thumbnail']}
            />
          </div>
          <div className={classes['article-photos__thumbnail-container']}>
            <img
              alt='Shoe'
              src={thumbnail4}
              className={classes['article-photos__thumbnail']}
            />
          </div>
        </div>
      </div>
    );
  }
}
