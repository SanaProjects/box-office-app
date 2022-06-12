import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navs from './components/Navs';
import Home from './pages/Home';
import About from './pages/About';
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <div>
      <Navs />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <Route>
          <div>
           404 Not Found...
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
