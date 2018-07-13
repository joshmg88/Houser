import React, { Component } from 'react';
import { HashRouter as Router, Link } from 'react-router-dom'
import routes from './routes/routes'
import './App.css';
// import Dashboard from './Dashboard/Dashboard';
// import Wizard from './Wizard/Wizard';
import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to='/'>Dashboard</Link>
          {routes}
          <Header />
        </div>
      </Router>
    );
  }
}

export default App;
