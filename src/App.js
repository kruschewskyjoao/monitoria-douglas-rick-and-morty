import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' component={ Header }/>
        </Switch>
      </BrowserRouter>
    );
  }
  }

export default Home;
