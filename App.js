import React , { Component } from 'react';
import allReducers from './src/reducers/index.js';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RegistrationForm from './src/components/RegistrationForm';
import rules from './src/validations/validate';
import messages from './src/validations/errorMessages';


const store = createStore(allReducers);

export default class App extends Component{
  render(){
    return(
      <Provider store= {store}>
        <RegistrationForm rules={rules} messages={messages} />
      </Provider>
    )
  }
}