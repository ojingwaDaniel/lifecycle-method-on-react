import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      showTest : true,
      data : ''
    }
  }
  updateTest = ()=>{
    this.setState(state=>(
          {data : state.data + 'adding values '}
            ),console.log(this.state.data))

  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <button>
            life cycle 
        
          </button>
          
          
          <button onClick={this.updateTest}>
            update Test
          </button>
          <h1>LIFE CYCLE METHOD (how do u see this</h1>
        </header>
        
      </div>
    )
  }
  
}

export default App;
