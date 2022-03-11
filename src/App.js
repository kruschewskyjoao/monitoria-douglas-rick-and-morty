import React from 'react';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Header from './components/Header';

class Home extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Header path='/' Component={ Header }/>
        </Switch>
      </BrowserRouter>
    );
  }
  }

export default Home;
