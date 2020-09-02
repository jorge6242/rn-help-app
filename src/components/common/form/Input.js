import React from 'react';
import { TextInput } from 'react-native';

export default function Input(props) {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={40}
      />
    );
  };