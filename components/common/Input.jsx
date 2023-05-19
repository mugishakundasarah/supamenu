import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { FONT, SIZES } from '../../constants/theme';

function InputWithIcon({name, placeholder}) {
    return (
      <View style={styles.container}>
        <Input
          placeholder={placeholder}
          leftIcon={<Icon name={name} size={20} color="gray" />}
          style={styles.input}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 2,
  },
  input: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular
  }
});

export default InputWithIcon