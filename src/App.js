import React from 'react';
import './App.css';
import Forms from './Form';
import Home from './home';
import Categories from './Categories';
import Load from './load'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
    <Switch>
    <div className="App">
      
      <Route exact path="/">
        <Home/>
      </Route>

      <Route path="/loadmore">
        <Load></Load>
      </Route>

      <Route  path="/form">
      <Forms/>
      </Route>

      <Route path="/categories"> 
        <Categories/>
      </Route>
      
    </div>
    </Switch>
    </Router>
  );
}

export default App;
