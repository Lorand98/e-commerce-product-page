import { Component } from 'react';
import classes from './Navigation.module.scss';

class Navigation extends Component {
  render() {
    return (
      <nav className={classes['navigation']}>
        <ul className={classes['navigation-list']}></ul>
      </nav>
    );
  }
}

export default Navigation;
