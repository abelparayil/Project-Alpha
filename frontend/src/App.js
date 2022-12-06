import React, {useState} from 'react';
import './App.css';
import {
  Route,
} from "react-router-dom";
import Authentication from './Pages/Account/Authentication'

function App() {
  return (
      <div className='App'>
        <Route path='/' component = {Authentication}/>
      </div>
  );
}

export default App;
