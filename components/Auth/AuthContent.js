import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import AuthForm from './AuthForm';
import FlatButton from '../UI/FlatButton';
import GoogleButton from '../UI/GoogleButton';

const AuthContent = ({ islogin, onAuthenticate }) => {
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmPassword: false,
  });
  const navigation = useNavigation();

  const switchAuthModeHandler = () => {
    if (islogin) {
      navigation.replace('Signup');
    } else {
      navigation.replace('Login');
    }
  };

  function submitHandler(credentials) {
    let { email, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const passwordsAreEqual = password === confirmPassword;

    if (!emailIsValid || !passwordIsValid || (!islogin && !passwordsAreEqual)) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({ email, password });
  }

  return (
    <View style={[tw`flex flex-col items-center justify-center h-full`]}>
      <View style={[tw`flex flex-col items-center justify-center`]}>
        <Text style={[tw`text-4xl font-bold my-5`]}>Tech Jobs</Text>
        <Text style={[tw`font-semibold`]}>
          {islogin ? 'Log in to your Account' : 'Get Started'}
        </Text>
      </View>
      <AuthForm
        onSubmit={submitHandler}
        islogin={islogin}
        credentialsInvalid={credentialsInvalid}
      />
      <View
        style={[tw`my-8 flex-row justify-center items-center w-[80%] mx-auto`]}
      >
        <View style={[tw`border-t basis-1/3 border-gray-400`]}></View>
        <Text style={[tw`font-semibold mx-2`]}>or Log in with</Text>
        <View style={[tw`border-t basis-1/3 border-gray-400`]}></View>
      </View>
      <GoogleButton />
      <View style={[tw`flex-row justify-center items-center`]}>
        <Text>{islogin ? "Don't have an Account?" : 'Have an Account?'}</Text>
        <FlatButton onPress={switchAuthModeHandler}>
          {islogin ? 'Sign Up' : 'Log in'}
        </FlatButton>
      </View>
    </View>
  );
};

export default AuthContent;
