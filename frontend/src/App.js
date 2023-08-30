import React from 'react'
import HomeScreen from './screens/HomeScreen.jsx';
import BookScreen from './screens/BookScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublisherDetailScreen from './screens/PublisherDetailScreen.jsx';
import PublishersScreen from './screens/PublishersScreen.jsx';
import Navbar from './components/Navbar.js';
import RegisterScreen from './screens/RegisterScreen.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/book/:id" exact component={BookScreen} /> 
        <Route path="/publisher" exact component={PublishersScreen} />
        <Route path="/publisher/:id" exact component={PublisherDetailScreen} /> 
        <Route path="/login" exact component={LoginScreen} /> 
        <Route path="/register" exact component={RegisterScreen} /> 
      </Switch>
    </Router>
  );
};

export default App;