import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
import tw from 'twrnc';

const GoogleButton = () => {
  const authHandler = () => {};

  return (
    <Pressable
      onPress={authHandler}
      style={({ pressed }) => [
        tw`opacity-100 w-[80%] mx-auto`,
        pressed && tw`opacity-70`,
      ]}
    >
      <View
        style={[
          tw`border border-[${Colors.primary}] py-2.5 flex-row justify-center items-center rounded-full mb-8`,
        ]}
      >
        <View style={[tw`flex-row items-center justify-center`]}>
          <Image
            source={require('../../assets/googleIcon.png')}
            style={[tw`w-4 h-4`]}
          />
          <Text style={[tw`font-bold text-[16px] mx-2`]}>Google</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default GoogleButton;
