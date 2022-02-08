import React, { Component } from 'react';

import classes from './ArticlePhotos.module.scss';

import thumbnailPath1 from '../../images/products/image-product-1-thumbnail.jpg';
import thumbnailPath2 from '../../images/products/image-product-2-thumbnail.jpg';
import thumbnailPath3 from '../../images/products/image-product-3-thumbnail.jpg';
import thumbnailPath4 from '../../images/products/image-product-4-thumbnail.jpg';
import photoPath1 from '../../images/products/image-product-1.jpg';
import photoPath2 from '../../images/products/image-product-2.jpg';
import photoPath3 from '../../images/products/image-product-3.jpg';
import photoPath4 from '../../images/products/image-product-4.jpg';

export default class ArticlePhotos extends Component {
  articlePhotoPaths = [
    { photoPath: photoPath1, thumbnailPath: thumbnailPath1 },
    { photoPath: photoPath2, thumbnailPath: thumbnailPath2 },
    { photoPath: photoPath3, thumbnailPath: thumbnailPath3 },
    { photoPath: photoPath4, thumbnailPath: thumbnailPath4 },
  ];

  constructor() {
    super();
    this.state = {
      selectedPhoto: this.articlePhotoPaths[0],
    };
  }

  selectPhotoHandler(selectedPhotoIndex) {
    this.setState({
      selectedPhoto: this.articlePhotoPaths[selectedPhotoIndex],
    });
  }

  render() {
    return (
      <div className={classes['article-photos']}>
        <img
          alt='Shoe'
          src={this.state.selectedPhoto.photoPath}
          className={classes['article-photos__main-photo']}
        />
        <div className={classes['article-photos__thumbnail-box']}>
          {this.articlePhotoPaths.map(({ thumbnailPath }, currElIndex) => (
            <div
              className={`${classes['article-photos__thumbnail-container']}  ${
                thumbnailPath === this.state.selectedPhoto.thumbnailPath &&
                classes['article-photos__thumbnail-container--selected']
              }`}
              key={currElIndex}
              onClick={this.selectPhotoHandler.bind(this, currElIndex)}
            >
              <img
                alt='Shoe'
                src={thumbnailPath}
                className={classes['article-photos__thumbnail']}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
