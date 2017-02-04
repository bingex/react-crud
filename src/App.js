import React, { Component } from 'react';
import './App.css';

import { Link, Route } from 'react-router-dom';
import GamesPage from './GamesPage';
import GameForm from './GameForm';

class App extends Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui three item menu">
          <Link className="item" to="/">Home</Link>
          <Link className="item" to="/games">Games</Link>
          <Link className="item" to="/games/new">Add new game</Link>
        </div>

        <Route exact path="/games" component={GamesPage} />
        <Route path="/games/new" component={GameForm} />
        <Route path="/game/:_id" component={GameForm} />
      </div>
    );
  }
}

export default App;
