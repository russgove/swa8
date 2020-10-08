import React from 'react';

import './App.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="../images.SAFlag.jpg" className="App-logo" alt="logo" />
        <p>
        <DatePicker isRequired={true} label="Closing Date" placeholder="enter closing Date" 
       
            />
      <Label >c'mon man!, Edit <code>src/App.tsx</code> and save to reload,!</Label>  
        
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
