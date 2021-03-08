import React from 'react';
import CardList from './CardList';
import ConditionalStyle from './ConditionalStyle';

import './App.css';


class App extends React.Component {

  // constructor
  // this

  // props and state are managed as instance of the class
  // each instance will get its props and state

  render() {
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <CardList/>
        <ConditionalStyle/>
      </div>
    );
  }
}
export default App;
