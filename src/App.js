import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  state = {
    curiosityPhotos: []
  }

  componentDidMount() {
    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=3PtkCxTL0yVGv2WM3uxMWAOMC932PhvhiCXGCiKU`)
      .then(res => {
        const curiosityPhotos = res.data["photos"];
        this.setState({ curiosityPhotos });
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <ul>
              { this.state.curiosityPhotos.map(photo => <li><img src={photo.img_src}/></li>)}
            </ul>
          </p>
        </header>
      </div>
    );
  }
}

export default App;
