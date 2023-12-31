import React from 'react'
import HomeScreen from './screens/HomeScreen.jsx';
import BookScreen from './screens/BookScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PublisherDetailScreen from './screens/PublisherDetailScreen.jsx';
import PublishersScreen from './screens/PublishersScreen.jsx';
import Navbar from './components/Navbar.js';
import RegisterScreen from './screens/RegisterScreen.jsx';
import BookEditScreen from './screens/BookEditScreen.jsx'
import PublisherEditScreen from './screens/PublisherEditScreen.jsx';
import PublisherAddScreen from './screens/PublisherAddScreen.jsx'
import BookAddScreen from './screens/BookAddScreen.jsx';

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
        <Route path="/bookedit/:id" exact component={BookEditScreen} /> 
        <Route path="/publisheredit/:id" exact component={PublisherEditScreen} /> 
        <Route path="/create" exact component={PublisherAddScreen} /> 
        <Route path="/books/create" exact component={BookAddScreen} /> 
      </Switch>
    </Router>
  );
};

export default App;