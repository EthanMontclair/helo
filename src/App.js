import React, {Component} from 'react';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      
    }
  }

  render(){
    return (
          <div className="App">
          {routes}
          <Nav />
          </div>
    );
  }
}

export default App;


