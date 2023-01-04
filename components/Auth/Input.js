import { View, Text, TextInput } from 'react-native';
import React from 'react';
import { Colors } from '../../constants/styles';
import tw from 'twrnc';

const Input = ({
  isInvalid,
  label,
  keyboardType,
  value,
  secure,
  placeholder,
  onUpdateValue,
}) => {
  return (
    <View style={[tw`my-2 w-full`]}>
      <Text
        style={[
          tw`text-[${Colors.black}] mb-2 font-medium`,
          isInvalid && tw`text-red-500`,
        ]}
      >
        {label}
      </Text>
      <TextInput
        style={[
          tw`w-full border border-[${Colors.primary}] rounded-1.5 px-3 py-2.5 text-[16px]`,
        ]}
        autoCapitalize={false}
        keyboardType={keyboardType}
        secureTextEntry={secure}
        onChangeText={onUpdateValue}
        value={value}
        placeholder={placeholder}
      />
    </View>
  );
};

export default Input;
