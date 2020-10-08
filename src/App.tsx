import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Label } from 'office-ui-fabric-react/lib/Label';
import { DatePicker } from 'office-ui-fabric-react/lib/DatePicker';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { MessageBar, MessageBarType, } from 'office-ui-fabric-react/lib/MessageBar';
import { CommandBarButton } from 'office-ui-fabric-react/lib/Button';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { DetailsList, DetailsListLayoutMode, IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { PrimaryButton, Button, ActionButton } from 'office-ui-fabric-react/lib/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
