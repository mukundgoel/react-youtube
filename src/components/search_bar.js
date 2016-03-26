
import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props);

    // set the initial state
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search"
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }
}

export default SearchBar;

/*

Some notes for above:

  Handling events in React has two steps:
     1. Event handler: function that runs when event occurs
     2. Pass event handler to element we want to monitor

  State is a plain JS object used to record and react to user events
  State causes component and child components to re-render

  Functional components do not have state, only class based components do

  Input is a controlled component and its value is controlled by the component state

*/
