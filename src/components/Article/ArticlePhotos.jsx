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

import { ReactComponent as PrevIcon } from '../../icons/icon-previous.svg';
import { ReactComponent as NextIcon } from '../../icons/icon-next.svg';

import LightBoxGallery from '../Layout/LightBoxGallery';

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
      selectedPhotoIndex: 0,
      selectedPhoto: this.articlePhotoPaths[0],
      lightBoxOpened: false,
    };
  }

  selectPhotoHandler(selectedPhotoIndex) {
    this.setState({
      selectedPhotoIndex,
      selectedPhoto: this.articlePhotoPaths[selectedPhotoIndex],
    });
  }

  navigatePhotoHandler(next) {
    let toBeSelectedPhotoIndex;
    let { selectedPhotoIndex: currSelectedPhotoIndex } = this.state;

    toBeSelectedPhotoIndex = next
      ? currSelectedPhotoIndex + 1
      : currSelectedPhotoIndex - 1;

    if (toBeSelectedPhotoIndex > this.articlePhotoPaths.length - 1) {
      toBeSelectedPhotoIndex = 0;
    }

    if (toBeSelectedPhotoIndex < 0) {
      console.log(toBeSelectedPhotoIndex);
      toBeSelectedPhotoIndex = this.articlePhotoPaths.length - 1;
    }

    this.selectPhotoHandler(toBeSelectedPhotoIndex);
  }

  toggleLightBox() {
    this.setState((prevState) => ({
      lightBoxOpened: !prevState.lightBoxOpened,
    }));
  }

  render() {
    const thumbnailList = this.articlePhotoPaths.map(
      ({ thumbnailPath }, currElIndex) => (
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
      )
    );

    const thumbnailBox = (
      <div className={classes['article-photos__thumbnail-box']}>
        {thumbnailList}
      </div>
    );

    return (
      <div className={classes['article-photos']}>
        <img
          alt='Shoe'
          src={this.state.selectedPhoto.photoPath}
          className={classes['article-photos__main-photo']}
          onClick={this.toggleLightBox.bind(this)}
        />
        {thumbnailBox}

        {this.state.lightBoxOpened && (
          <LightBoxGallery onClose={this.toggleLightBox.bind(this)}>
            <div
              className={`${classes['article-photos']} ${classes['article-photos--lightbox']}`}
            >
              <div className={classes['article-photos__main-photo-container']}>
                <button
                  className={`${classes['article-photos__main-photo-container__switch-btn']} ${classes['article-photos__main-photo-container__prev-btn']}`}
                  onClick={this.navigatePhotoHandler.bind(this, false)}
                >
                  <PrevIcon />
                </button>
                <img
                  alt='Shoe'
                  src={this.state.selectedPhoto.photoPath}
                  className={`${classes['article-photos__main-photo']} ${classes['article-photos__main-photo--lightbox']}`}
                />
                <button
                  className={`${classes['article-photos__main-photo-container__switch-btn']} ${classes['article-photos__main-photo-container__next-btn']}`}
                  onClick={this.navigatePhotoHandler.bind(this, true)}
                >
                  <NextIcon />
                </button>
              </div>
              {thumbnailBox}
            </div>
          </LightBoxGallery>
        )}
      </div>
    );
  }
}
