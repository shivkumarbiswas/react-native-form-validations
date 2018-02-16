'use strict';

import React, {Component}  from 'react';
import {View, Text, TextInput, TouchableHighlight} from 'react-native';
import ValidationComponent from 'react-native-form-validator';

export default class RegistrationForm extends ValidationComponent {

    constructor(props) {
      super(props);

      this.state = {
        email : "",
        emailErrorMessage: "",
        name : "",
        nameErrorMessage: "",
        };

      this._onChangeText=this._onChangeText.bind(this);
      this._onNameChangeText=this._onNameChangeText.bind(this);
    }

    _onChangeText(text){

        this.setState({email: text}, ()=>{
            this.validate({
                email: {email: true},
              });

              this.setState({emailErrorMessage: this.getErrorsInField('email')});
        });      
    }

    _onNameChangeText(text){

        this.setState({name: text}, ()=>{
            this.validate({
                name: {minlength: 3},
              });

              this.setState({nameErrorMessage: this.getErrorsInField('name')});
        });              
    }
  
    render() {

        console.log(this.getErrorMessages());

        return (            
          <View>
            <Text>Registration</Text>
            <TextInput ref="email" placeholder="Enter email" onChangeText={this._onChangeText} value={this.state.email} />
            <Text>{this.state.emailErrorMessage}</Text>
            <TextInput ref="email" placeholder="Enter name" onChangeText={this._onNameChangeText} value={this.state.name} />
            <Text>{this.state.nameErrorMessage}</Text>
          </View>
        );
    }  
}