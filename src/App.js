import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';

import {SearchBox} from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({cards: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render() {
    const { cards, searchField } = this.state;
    const filteredCards = cards.filter(card => 
      card.name.toLowerCase().includes(searchField.toLowerCase())
      )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder='search'
          handleChange={this.handleChange}
        />
        <CardList cards={filteredCards}>
          
        </CardList>
      </div>
    );
  }
}

export default App;
