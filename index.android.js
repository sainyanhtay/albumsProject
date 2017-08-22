import React from 'react';
import ReactNative from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

//create a component
const App = () =>
  <ReactNative.View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList />
  </ReactNative.View>;

ReactNative.AppRegistry.registerComponent('albums', () => App);
