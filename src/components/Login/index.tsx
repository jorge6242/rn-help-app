import React, {FunctionComponent} from 'react';
import {View, Button, StyleSheet, Text, Image} from 'react-native';
import {useForm} from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../common/form/Input';
import DemoLogo from '../../assets/images/demoLogo.png';
import {TouchableHighlight} from 'react-native-gesture-handler';
import { login } from '../../actions/login.action';

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
    loginReducer: { loading }
  } = useSelector((state: any) => state);

  const onSubmit  = async (form: FormData) => {
    try {
      const res: any = await dispatch(login(form));
      console.log('res ', res);
      navigation.navigate('TabNavigator');
    } catch (error) {
      console.log('error', error);
    }
    //navigation.navigate('TabNavigator');
  };

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.textTitle}>Help App</Text>
      </View>
      <View style={styles.logoContainer}>
        <View style={styles.logo}><Text style={styles.logoText}>Logo</Text></View>
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

      <TouchableHighlight
        disabled={loading || false}
        onPress={handleSubmit(onSubmit)}
        style={styles.submit}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    padding: 20,
    backgroundColor: '#00cec9',
    height: "100%"
  },
  textTitle: {
    fontSize: 30,
    textAlign: 'center',
    color: "#fff",
    fontWeight: "bold"
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 30,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 150,
    borderRadius: 80,
    borderColor: "#fff",
    borderWidth: 5
  },
  logoText: {
    color: "#fff",
    fontSize: 25,
    fontWeight: "bold"
  },
  logoImage: {
    width: 150,
    height: 150,
  },
  submit: {
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'#00cec9',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  submitText:{
    color:'#fff',
    textAlign:'center',
    fontSize: 18,
    fontWeight: "bold"
}
});

export default Login;
