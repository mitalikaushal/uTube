import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import Titles from './components/titles';
import VideoDescription from './components/video-description'

const API_KEY = "AIzaSyArPDGJ_0ZTU8DkaOE9OsGNSIRPFjsNMRU";




class App  extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards' }, (videos) => {
          this.setState({ videos });
        });
    }
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDescription video ={this.state.videos[0]} />
                <Titles videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));