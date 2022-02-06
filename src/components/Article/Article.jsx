import React, { Component } from 'react';

import classes from './Article.module.scss';
import ArticleDetails from './ArticleDetails';
import ArticlePhotos from './ArticlePhotos';

export default class Article extends Component {
  render() {
    return (
      <article className={classes['article']}>
        <ArticlePhotos />
        <ArticleDetails />
      </article>
    );
  }
}
