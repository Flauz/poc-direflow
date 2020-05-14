import React, { FC } from 'react';
import { withStyles } from 'direflow-component';
import styles from './App.css';
import AppInside from './AppInside';
import store from './Store/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Styled } from 'direflow-component';

var routes = null

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppInside/>
      </BrowserRouter>
    </Provider>
  );
};

export default withStyles(styles)(App);
