import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
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
  library.add(fab);
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <>
      <style type="text/css">
        {`
          .bg-default {
            background-color: rgba(63, 81, 181, 1);
            color: white;
          }

          .btn-default {
            background-color: rgba(63, 81, 181, 1);
            color: white;
          }

          .btn-default:hover {
            background-color: rgba(63, 81, 181, 0.7);
            color: white;
          }

          .bg-secondary {
            background-color: rgb(224, 184, 131);
          }

          .btn-secondary {
            background-color: rgb(224, 184, 131);
          }

          .btn-secondary:hover {
            background-color: rgb(224, 184, 131, 0.7);
          }
        `}
      </style>

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