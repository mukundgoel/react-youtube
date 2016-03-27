import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = "AIzaSyBndGu5Hg19lw0YIT13sOz3Vu-j5M0X-lM";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: YOUTUBE_API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

 render() {
   return (
     <div>
       <SearchBar />
       <VideoDetail video={this.state.selectedVideo} />
       <VideoList
         onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         videos={this.state.videos} />
     </div>
   );
 }
}

ReactDOM.render(<App />, document.querySelector(".container"));

/*

Some notes for above:

 => is referred to fat arrow

 Downward Data Flow : parent component should fetch data that children components need

 */
