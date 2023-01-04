import { View, Text } from 'react-native';
import React from 'react';
import AuthContent from '../../components/Auth/AuthContent';

const LoginScreen = () => {
  return (
    <View>
      <AuthContent islogin />
    </View>
  );
};

export default LoginScreen;
