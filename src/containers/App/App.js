import React from 'react';
import Counter from '../../components/Counter/Counter';
import AddCounter from '../../components/AddCounter/AddCounter';
import RemoveCounter from '../../components/RemoveCounter/RemoveCounter';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <Counter />
      <br/>
      <AddCounter />
      <br/>
      <RemoveCounter />
    </div>
  );
}

export default App;
