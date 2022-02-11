import { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './App.module.scss';
import Article from './components/Article/Article';
import Navigation from './components/Layout/Navigation';

import reducers from './store/index';

class App extends Component {
  render() {
    const store = createStore(reducers);
    return (
      <Provider store={store}>
        <Navigation />
        <Article />
      </Provider>
    );
  }
}

export default App;
