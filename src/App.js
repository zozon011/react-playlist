import React, { Component } from "react";
import "./App.css";

let defaultStyle = {
  color: "#fff"
};

let fakeServerData = {
  user: {
    name: "Zorica",
    playlists: [
      {
        name: "My Favourites",
        songs: [
          { name: "Beat It", duration: 1345 },
          { name: "Pl1S2", duration: 1000 },
          { name: "Pl1S3", duration: 2000 }
        ]
      },
      {
        name: "Discover Weekly",
        songs: [
          { name: "Pl2S1", duration: 1333 },
          { name: "Pl2S2", duration: 2111 },
          { name: "Pl2S3", duration: 1999 }
        ]
      },
      {
        name: "The best!",
        songs: [
          { name: "Pl3S1", duration: 1222 },
          { name: "Pl3S2", duration: 2111 },
          { name: "Pl3S3", duration: 900 }
        ]
      },
      {
        name: "80's playlist",
        songs: [
          { name: "Pl4S1", duration: 444 },
          { name: "Pl4S2", duration: 3333 },
          { name: "Pl4S3", duration: 4444 }
        ]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs);
    }, []);
    let totalDuration = allSongs.reduce((duration, song) => {
      return duration + song.duration;
    }, 0);

    return (
      <div style={{ ...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2>{Math.round(totalDuration / 120)} hours</h2>
      </div>
    );
  }
}

class PlayList extends Component {
  render() {
    return (
      <div style={{ ...defaultStyle, width: "25%", display: "inline-block" }}>
        <img />
        <h3>Playlist Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img />
        <input type="text" />
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = { serverData: {} };
  }
  componentDidMount() {
    setTimeout(() => this.setState({ serverData: fakeServerData }), 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ? (
          <div>
            <h1 style={{ ...defaultStyle, "font-size": "50px" }}>
              {this.state.serverData.user.name}'s list
            </h1>

            <PlaylistCounter playlists={this.state.serverData.user.playlists} />
            <HoursCounter playlists={this.state.serverData.user.playlists} />

            <Filter />
            <PlayList />
            <PlayList />
            <PlayList />
          </div>
        ) : (
          <h1 style={defaultStyle}>Loading...</h1>
        )}
      </div>
    );
  }
}

export default App;
