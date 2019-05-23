import React, { Component } from 'react';
import Listing from "./components/Listing";
import './App.css';

class App extends Component {
  state = {
    activity: {
      task: ' ',
      add: function(){
        console.log('yes')
        let theVal = document.getElementById('inp').value;
        let theUl = document.getElementById('theUl');
        let li =  document.createElement("li");
        theUl.appendChild(li).innerHTML=theVal;
      },
      delete: function (){}
    }
  }

  render() {
    const { activity } = this.state;
    return (
      <div className="App">
        <Listing activity={activity}/>
      </div>
    );
  }
}


export default App;
