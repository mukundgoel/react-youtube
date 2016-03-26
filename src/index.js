import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const YOUTUBE_API_KEY = "AIzaSyBndGu5Hg19lw0YIT13sOz3Vu-j5M0X-lM";

// Create a new component. This component should produce
// some HTML

// => is referred to fat arrow
const App = () => {
  return (
    <div>
    <SearchBar />
  </div>
  );
}

// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.querySelector(".container")
);
