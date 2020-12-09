import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/calendar';

const style = {
  position: "relative",
}

class App extends Component {
  onDayClick = (e, day) => {
  }
  
  render() {
    return (
      <div className="App">
        <Calendar style={style} width="360px" 
          onDayClick={(e, day)=> this.onDayClick(e, day)}/>     
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);