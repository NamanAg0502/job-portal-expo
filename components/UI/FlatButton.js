import { Pressable, StyleSheet, Text, View } from 'react-native';
import tailwind from 'twrnc';

import { Colors } from '../../constants/styles';

function FlatButton({ children, onPress }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <View>
        <Text
          style={[tailwind`text-center text-[${Colors.primary}] font-semibold`]}
        >
          {children}
        </Text>
      </View>
    </Pressable>
  );
}

export default FlatButton;

const styles = StyleSheet.create({
  button: {
    padding: 6,
  },
  pressed: {
    opacity: 0.7,
  },
});
