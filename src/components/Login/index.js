import * as React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Input from '../common/form/Input';

function Login({ navigation }) {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  //   const { register, setValue, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log('submit');
    navigation.navigate('TabNavigator')
    }

  const onUser = (event) => {
    console.log('event a ', event);
    setUser(event);
  };

  const onPassword = (event) => {
    console.log('event a ', event);
    setPassword(event);
  };

  return (
    <View style={styles.root}>
      <View style={styles.field}>
        <Input multiline numberOfLines={4} onChangeText={onUser} value={user} />
      </View>

      <View style={styles.field} >
        <Input
          multiline
          numberOfLines={4}
          onChangeText={onPassword}
          value={password}
        />
      </View>
      {/* <RHFInput
        register={register}
        setValue={setValue}
        as={<TextInput />}
        onChangeEvent={onChange}
        name="firstName"
      /> */}

      <Button title="Login" onPress={onSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
      width: '100%',
      padding: 20
    },
    field: {
        borderColor: 'black',
        borderWidth: 1,
        margin: 10,
        height: 50
    }
});

export default Login;
