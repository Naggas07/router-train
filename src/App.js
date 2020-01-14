import React from 'react';
import Nabvar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Where from './components/Where'
import Catalog from './components/Catalog'
import { Switch, Route, Redirect} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/About">
          <About />
        </Route>
        <Route exact path="/Where" component={Where} />
        <Route exact path="/Catalog">
          <Catalog />
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
