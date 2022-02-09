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

import Modal from '../UI/Modal';
import Photobox from '../UI/Photobox';

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
      ({ thumbnailPath }, currElIndex) => {
        const thumbnailSelected =
          thumbnailPath === this.state.selectedPhoto.thumbnailPath;

        const thumbnailImg = (
          <img
            alt='Shoe'
            src={thumbnailPath}
            className={classes['article-photos__thumbnail']}
          />
        );

        return (
          <div
            className={`${classes['article-photos__thumbnail-container']} ${
              thumbnailSelected &&
              classes['article-photos__thumbnail-container--selected']
            }`}
            key={currElIndex}
            onClick={this.selectPhotoHandler.bind(this, currElIndex)}
          >
            {thumbnailImg}
          </div>
        );
      }
    );

    const thumbnailBox = (
      <div className={classes['article-photos__thumbnail-box']}>
        {thumbnailList}
      </div>
    );

    const navigateForward = this.navigatePhotoHandler.bind(this, true);
    const navigateBackward = this.navigatePhotoHandler.bind(this, false);

    return (
      <div className={classes['article-photos']}>
        <Photobox
          onlyPhoneNavigation={true}
          onPrev={navigateBackward}
          onNext={navigateForward}
        >
          <img
            alt='Shoe'
            src={this.state.selectedPhoto.photoPath}
            className={`${classes['article-photos__main-photo']} ${classes['article-photos__main-photo--desktop']}`}
            onClick={this.toggleLightBox.bind(this)}
          />
          <img
            alt='Shoe'
            src={this.state.selectedPhoto.photoPath}
            className={`${classes['article-photos__main-photo']} ${classes['article-photos__main-photo--phone']}`}
          />
        </Photobox>
        {thumbnailBox}

        {this.state.lightBoxOpened && (
          <Modal onClose={this.toggleLightBox.bind(this)}>
            <div
              className={`${classes['article-photos']} ${classes['article-photos--lightbox']}`}
            >
              <Photobox onPrev={navigateBackward} onNext={navigateForward}>
                {/* TODO: lazy loading img */}
                <img
                  alt='Shoe'
                  src={this.state.selectedPhoto.photoPath}
                  className={`${classes['article-photos__main-photo']} ${classes['article-photos__main-photo--lightbox']}`}
                />
              </Photobox>
              {thumbnailBox}
            </div>
          </Modal>
        )}
      </div>
    );
  }
}
