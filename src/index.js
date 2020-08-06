import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDg-LbORV70UNsly01XXtbgTDVB-Ks-6wA",
    authDomain: "odeic-60145.firebaseapp.com",
    databaseURL: "https://odeic-60145.firebaseio.com",
    projectId: "odeic-60145",
    storageBucket: "odeic-60145.appspot.com",
    messagingSenderId: "586123115166",
    appId: "1:586123115166:web:04256e80da2eba803ad98f",
    measurementId: "G-SB64BH3B69"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App/>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
