import React from 'react';
import logo from './logo.svg';
import './App.css';

import MadodaList from './MadodaList';
import AddIndodaForm from './AddIndoda';

import {AmadodaContextProvider} from './AmadodaContext';

function App() {

  return (
    <AmadodaContextProvider>
    <div className="App"> 
      <h1>Add indoda</h1>
      <AddIndodaForm />
      <MadodaList />
    </div>
    </AmadodaContextProvider>
  );
}

export default App;
