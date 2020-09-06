import React, {FunctionComponent} from 'react';
import {View, Button, StyleSheet, Text, Image, Animated} from 'react-native';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';

import Input from '../common/form/Input';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {login} from '../../actions/login.action';
import Styles from './style';
import GoogleLogin from '../GoogleLogin';

type Props = {
  navigation: any;
};

type FormData = {
  username: string;
  password: string;
};

const Login: FunctionComponent<Props> = ({navigation}) => {
  const {handleSubmit, control, errors} = useForm<FormData>();
  const dispatch = useDispatch();
  const {
    loginReducer: {loading},
  } = useSelector((state: any) => state);

  const onSubmit = async (form: FormData) => {
    try {
      const res: any = await dispatch(login(form));
      navigation.navigate('TabNavigator');
    } catch (error) {}
  };

  const handleGoogleLogin = (user: object) => {
    navigation.navigate('TabNavigator');
  };

  return (
    <View style={Styles.root}>
      <View>
        <Text style={Styles.textTitle}>Help App</Text>
      </View>
      <View style={Styles.logoContainer}>
        <View style={Styles.logo}>
          <Text style={Styles.logoText}>Logo</Text>
        </View>
      </View>
      <View>
        <Input
          control={control}
          name="username"
          required
          error={errors.username ? errors.username.message : null}
          placeholder="Usuario"
        />
      </View>

      <View>
        <Input
          control={control}
          name="password"
          required
          error={errors.password ? errors.password.message : null}
          placeholder="Clave"
          secureText
        />
      </View>
      <View>
        <TouchableHighlight
          disabled={loading || false}
          onPress={handleSubmit(onSubmit)}
          style={Styles.submit}>
          <Text style={Styles.submitText}>Login</Text>
        </TouchableHighlight>
      </View>
      <View style={{marginTop: 10, marginBottom: 10}}>
        <Text style={{textAlign: 'center', color: '#fff', fontWeight: 'bold'}}>
          OR
        </Text>
      </View>
      <View>
        <GoogleLogin handleLogin={handleGoogleLogin} />
      </View>
    </View>
  );
};

export default Login;
