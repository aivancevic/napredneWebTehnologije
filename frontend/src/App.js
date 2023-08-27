import React from 'react'
import HomeScreen from './screens/HomeScreen.jsx';
import BookScreen from './screens/BookScreen.jsx';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeScreen} />
        <Route path="/book/:id" exact component={BookScreen} />
      </Switch>
    </Router>
  );
};

export default App;
