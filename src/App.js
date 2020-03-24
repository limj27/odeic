//Tool imports
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Content imports
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import FrontPage from './Front';

export class App extends Component {
  render() {
    let content = null;
    content = (
      <BrowserRouter>
        <div> 
          <header>
            <Nav />
          </header>
          <main>
            <hr />
            <Switch>
              <Route path='/home' component={FrontPage}/>
              <Route path='/about' />
              <Redirect to="/home" />
            </Switch>
          </main>
          <Footer />
        </div>
        </BrowserRouter>
    );
      return (
        <div>
          {content}
        </div>
      );
    }
}
