import { Component } from 'react';
import './App.module.scss';
import Article from './components/Article/Article';
import Navigation from './components/Layout/Navigation';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Article />
      </>
    );
  }
}

export default App;
