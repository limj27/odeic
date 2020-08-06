//Tool imports
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//Content imports
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import FrontPage from './Front';
import AboutPage from './About';

//Firebase
import StyleFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase/app';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 'home',
      id: null,
      user: null
    }
  }
  uiConfig = {
    signInOptions: [
      {
        provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        requireDisplayName: true
      },
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],

    //don't use the accountchooser
    credentialHelper: 'none',

    //make a popup window for google
    signInFlow: 'popup'
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((firebaseUser) => {
      this.setState({user: firebaseUser});
    });
  }

  handleSignOut = () => {
    this.setState({errorMessage:null}); //clear any old errors
    this.setState({user: null});

    /* TODO: sign out user here */
    firebase.auth().signOut();
  }

  render() {
    let content = null;
    if(this.state.user == null) {
      content = (
        <div id="signIn">
          <img src="logo.png" alt="odeic logo" id="logo"></img>
          <StyleFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={ firebase.auth() } />
        </div>
      );
    } else {
          content = (
            <BrowserRouter>
              <div> 
                <header>
                  <Nav signOut={this.handleSignOut}/>
                </header>
                <main>
                  <Switch>
                    <Route path='/home' component={FrontPage}/>
                    <Route path='/about' component={AboutPage} />
                    <Redirect to="/home" />
                  </Switch>
                </main>
                <Footer />
              </div>
              </BrowserRouter>
          );
          }

      return (
        <div>
          {content}
        </div>
      );
    }
}
