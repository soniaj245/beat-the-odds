import React from 'react';
import './App.css';
import { Helmet } from 'react-helmet';
import { GameInformation } from './components/GameInformation';
import { GameInputForm } from './components/GameInputForm';

function App() {
  
  return (
    <div className="App">
      <Helmet>
        <style>{'body { background-color: #262638; }'}</style>
      </Helmet>
      <div className="left-hand-view" style={{backgroundImage: "url(" + "https://www.lensc.org/wp-content/uploads/2023/11/Night-Sky-with-Orion-scaled.jpg" + ")", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
        <h1 className="title">Beat the Odds</h1>
        <GameInformation />
      </div>
      <div className="right-hand-view">
        <GameInputForm />
      </div>
    </div>
  );
}

export default App;
