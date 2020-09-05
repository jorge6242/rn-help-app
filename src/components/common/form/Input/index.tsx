import React, {FunctionComponent} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';

type PropFields = {
  control: any;
  name: string;
  required?: boolean;
  error: any;
  placeholder?: string;
  secureText?: boolean
};

const Input: FunctionComponent<PropFields> = ({
  control,
  name,
  required = false,
  error = null,
  placeholder = '',
  secureText = false
}) => {
  return (
    <Controller
      control={control}
      render={({onChange, onBlur, value}) => (
        <View style={styles.container}>
          {error && (
            <View style={styles.messageContainer}>
              <Text style={styles.error}>
                {error && error}
              </Text>
            </View>
          )}
          <View style={styles.field}>
            <TextInput
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder={placeholder}
              secureTextEntry={secureText}
              style={styles.input}
              placeholderTextColor="#fff"
            />
          </View>
        </View>
      )}
      name={name}
      rules={{required: required ? 'Requerido' : false}}
      defaultValue=""
    />
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  messageContainer: {
    margin: 10,
    marginTop: 0,
    marginBottom: 0,
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
  },
  field: {
    borderWidth: 1,
    margin: 10,
    height: 50,
    borderRadius: 10,
    textDecorationLine: 'none',
    paddingLeft: 20,
    paddingRight: 20,
    borderColor: '#fff'
  },
  input: {
      color: '#fff',
      fontSize: 20
  }
});

export default Input;
