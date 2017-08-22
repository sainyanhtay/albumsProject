import React from 'react';
import ReactNative from 'react-native';
import axios from 'axios';
import AlbumDetails from './AlbumDetails';

class AlbumList extends React.Component {
  //state ={}; //initial default empty state
  state = { albums: [] };

  componentWillMount() {
    axios
      .get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetails key={album.title} album={album} />
      //album is for props object for parent
    ); //albums is an array
  }

  render() {
    console.log(this.state);

    return (
      <ReactNative.ScrollView>
        {this.renderAlbums()}
      </ReactNative.ScrollView>
    );
  }
}
export default AlbumList;
