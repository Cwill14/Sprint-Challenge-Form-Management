import React, { useState, useEffect } from 'react';
import './App.css';
import SignupForm from './components/Form';
import Data from './components/Data';
import { axiosWithAuth } from './axiosAuth';
import { Route } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Route exact path="/" component={SignupForm} />
      <Route path="/data" component={Data} />
    </div>
  );
}

export default App;
