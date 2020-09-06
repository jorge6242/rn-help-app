import React, {useEffect, FunctionComponent} from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import setToast from '../../actions/toast.action';

type Props = {
  handleLogin: Function;
};

const GoogleLogin: FunctionComponent<Props> = ({handleLogin}) => {
  const dispatch = useDispatch();

  const init = () => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId:
        '539909442923-2a7luagejcr622g09mof3ngu0f8n9uov.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      //iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  };

  useEffect(() => {
    init();
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      handleLogin(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        dispatch(
          setToast({
            payload: {
              message: "play services not available or outdated",
              status: true,
              type: 'error',
            },
          }),
        );
      } else {
        // some other error happened
      }
    }
  };

  return (
    <View style={{alignItems: 'center'}}>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default GoogleLogin;
