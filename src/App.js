import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import BooksList from './components/BooksList';
import BookInformation from './components/BookInformation';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={BooksList} />
          <Route path="/BookInformation" component={BookInformation} />
        </div>
      </Router>
    );
  }
}

export default App;
