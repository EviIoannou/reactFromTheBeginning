import React, { Component } from 'react';
import './App.css';
import CardSet from './CardSet';
import cards from './cards';
// import StatePractice from './StatePractice';
// import EventAndState from './EventAndState';
// import StateInAction from './StateInAction';

class App extends Component {

  render (){
    return (
        <div className="App">
          <div className="row">
            <CardSet cards={cards} />
          </div>
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
