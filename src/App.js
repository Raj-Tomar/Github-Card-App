import React from 'react';
import CardList from './CardList';
import Form from './Form';
import ConditionalStyle from './ConditionalStyle';

import './App.css';


const testData = [
  {name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
    {name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
  ];

class App extends React.Component {

  // constructor
  // this

  // props and state are managed as instance of the class
  // each instance will get its props and state


  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     profiles: testData
  //   };
  // }

  // Short form of above constructor code
  state = {
    profiles: testData,
  }

  render() {
    return(
      <div>
        <div className="header">{this.props.title}</div>
        <Form />
        <CardList profiles={this.state.profiles}/>
        <ConditionalStyle/>
      </div>
    );
  }
}
export default App;
