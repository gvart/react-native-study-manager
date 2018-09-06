import React, {Component} from 'react';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'
import firebase from 'firebase';
import Router from './Router'

export default class App extends Component {

  componentWillMount() {
    const config = {
        apiKey: 'AIzaSyAxBU9nBSbJpytQXJN6vfKZ5s_3EUrxRGg',
        authDomain: 'managerauthentication-835a9.firebaseapp.com',
        databaseURL: 'https://managerauthentication-835a9.firebaseio.com',
        projectId: 'managerauthentication-835a9',
        storageBucket: 'managerauthentication-835a9.appspot.com',
        messagingSenderId: '647168966476'
    };
    
    firebase.initializeApp(config);
  }

  render() {
    return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
            <Router/>
        </Provider>
    );
  }
}

