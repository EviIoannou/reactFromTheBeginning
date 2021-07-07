import React, { Component } from 'react';
import './App.css';
import StatePractice from './StatePractice';
// import EventAndState from './EventAndState';
// import StateInAction from './StateInAction';

class App extends Component {
  render (){
    return (
        <div className="App">
            <StatePractice />
        </div>
    )
  }
}

// Function component:

// function App() {
//   return (
//     <div className="App">
//         <h1>State check</h1>
//     </div>
//   );
// }

export default App;
