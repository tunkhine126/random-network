// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Landing from './components/landing/index';
import Button from '@material-ui/core/Button';
import Opportunities from './db.json';

const App = () => {
  const [viewState, setViewState] = useState('initial')
  const [opportunity, setOpportunity] = useState({})

  const pickOpportunity = () => {
    setViewState('opportunityView');
    randomizer(Opportunities);
  }

  const reset = () => {
    setViewState('initial');
    setOpportunity({});
  }

  const randomizer = (array) => {
    setOpportunity(array[Math.floor(Math.random() * array.length)])
  }

  return (
    <div className="background">
      {viewState === 'initial' && (
        <div className="background">
          <Landing />
          <Button
            variant="contained"
            color="secondary"
            onClick={pickOpportunity}>
            Push me
          </Button>
        </div>
      )}
      {viewState === 'opportunityView' && (
        <div className="background">
          <p>
            {opportunity.network}
          </p>
          <a
            className="App-link"
            href={`${opportunity.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it out
          </a>
          <Button
            variant="contained"
            color="secondary"
            onClick={pickOpportunity}>
            Pick another
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={reset}>
            Restart
          </Button>
        </div>
      )}
    </div>
  );
}

export default App;
