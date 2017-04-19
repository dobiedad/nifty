import React, { Component } from 'react';
import ReactNative from 'react-native';
import Home from './app/views/Home';

import {
  AppRegistry
} from 'react-native';

class nifty extends React.Component {

  render() {
    return (
      <Home os={'ios'}></Home>
    );
  }
}

ReactNative.AppRegistry.registerComponent('nifty', function() { return nifty });
