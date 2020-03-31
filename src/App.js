import React from 'react';
import Header from './Components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './Style/main.scss';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>

        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
