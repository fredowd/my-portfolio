import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Components
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/SinglePage/About';
import Portfolio from './Components/SinglePage/Portfolio';

function App() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <>
      <Router>
        <Header mobileMenuIsOpen={mobileMenuIsOpen} setMobileMenuIsOpen={setMobileMenuIsOpen} />
        <Container className="App">
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;