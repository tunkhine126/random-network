// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Landing from './components/landing/index';
import NetworkButton from './components/button/index';

const App = () => {

  return (
    <div className="background">
      <Landing />
      <NetworkButton />
    </div>
  );
}

export default App;
