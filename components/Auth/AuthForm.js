import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../../constants/styles';
import Input from './Input';
import Button from '../UI/Button';
import tailwind from 'twrnc';

const AuthForm = ({ islogin, onSubmit, credentialsInvalid }) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const {
    email: emailIsInvalid,
    password: passwordIsInvalid,
    confirmPassword: passwordsDontMatch,
  } = credentialsInvalid;

  function updateInputValueHandler(inputType, enteredValue) {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  }

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={[tailwind`mt-8 w-[80%] mx-auto`]}>
      <Input
        label="Email Address"
        onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        value={enteredEmail}
        placeholder="Enter your email address"
        keyboardType="email-address"
        isInvalid={emailIsInvalid}
      />
      <Input
        label="Password"
        onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        secure
        value={enteredPassword}
        isInvalid={passwordIsInvalid}
        placeholder="Enter your password"
      />
      {!islogin && (
        <Input
          label="Confirm Password"
          onUpdateValue={updateInputValueHandler.bind(this, 'confirmPassword')}
          secure
          value={enteredConfirmPassword}
          isInvalid={passwordsDontMatch}
          placeholder="Confirm your Password"
        />
      )}
      <View style={[tailwind`mt-6`]}>
        <Button onPress={submitHandler}>
          {islogin ? 'Log In' : 'Register'}
        </Button>
      </View>
    </View>
  );
};

export default AuthForm;
