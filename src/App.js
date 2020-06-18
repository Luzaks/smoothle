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
      ],
      copyBooks: []
    };
  }

  componentDidMount() {
    this.initBooks();
  }

  initBooks = () => {
    this.setState((state,props) => ({
      copyBooks: [...state.books]
    }));
  };

  onAdd = (item) => {
    let temp = [...this.state.books];
    const id = temp[temp.length - 1].id + 1;
    item['id'] = id;
    temp.push(item);

    this.setState({books: [...temp]});
    this.initBooks();
  };

  onSearch = (query) => {
    if (query === '') {
      this.initBooks();
    }else{
      const temp = [...this.state.books];
      let res = [];

      temp.forEach(item => {
        if (item.title.toLowerCase().indexOf(query) > -1){
          res.push(item);
        }
      });
      this.setState({copyBooks: [...res]});
    }
};
  onRemove = (id) => {
    let temp = [...this.state.books];
    const res = temp.filter(item => item.id !== id);
    this.setState({books: [...res]});
    this.initBooks();
  };

  render() {
    return (
        <div className="app">
          <Menu title="Smoothle" onadd={this.onAdd} onsearch={this.onSearch}/>
          <List
              items={this.state.copyBooks}
              onremove={this.onRemove}
          />
        </div>
    );
  }
}

export default App;
