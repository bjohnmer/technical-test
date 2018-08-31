import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import HomeContainer from './containers/home_container';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app content">
            <section className="app-header">
              <nav className="navbar navbar-light b-white ">
                <span className="navbar-brand navbar-center nav-brand">InnRoad</span>
              </nav>
            </section>
            <section className="app-content">
              <div className="card-container">
                <Route exact path="/" component={HomeContainer} />
              </div>
            </section>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
