import * as React from 'react'
import './App.css'

import { Welcome } from './features/welcome/welcome'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Welcome />
      </div>
    );
  }
}

export default App;
