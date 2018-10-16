import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';
const API_KEY = "AIzaSyBs6MD0JBmqooGnKjCAxnN0jUJdf6-NxiA";

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));