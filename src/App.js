import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Show from './pages/Show';
// import Navs from './components/Navs';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (     
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route exact path="/show/:id">
          <Show />
        </Route >

        <Route>
          <div>
           404 Not Found...
          </div>
        </Route>
      </Switch>
    
  );
}

export default App;
