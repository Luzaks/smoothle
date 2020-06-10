import React from 'react';
import './App.css';
import Menu from './Menu'
import List from './List'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      books:[
        {id:0, rating: 1, title: 'Un homme qui dort', image: 'libro01.jpg'},
        {id:1, rating: 5, title: 'The shining', image: 'libro02.jpg'},
        {id:2, rating: 3, title: 'Principito', image: 'libro03.jpg'},
        {id:3, rating: 1, title: 'You', image: 'libro04.jpg'},
        {id:4, rating: 2, title: 'Stars', image: 'libro05.jpg'}
      ]
    };
  }

  render() {
    return (
        <div className="app">
          <Menu title="Smoothle" />
          <List items={this.state.books}/>
        </div>
    );
  }
}

export default App;
