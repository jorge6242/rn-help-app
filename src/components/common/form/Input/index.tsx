import React, {FunctionComponent} from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';
import {Controller} from 'react-hook-form';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';

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

  const InputContainer = (props: any) => { 
    const { onBlur, onChange, value } = props;
    return (
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
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            secureTextEntry={secureText}
            style={styles.input}
            placeholderTextColor="#fff"
          />
        </View>
      </View>
    )}


  return (
    <Controller
      control={control}
      render={InputContainer}
      name={name}
      rules={{required: required ? 'Requerido' : false}}
      defaultValue=""
    />
  );
};

export default Input;
