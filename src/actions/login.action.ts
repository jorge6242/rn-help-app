
import Api from '../api/Login'
import { ACTIONS } from '../interfaces/actions/login';
import AsyncStorage from '@react-native-community/async-storage';

import Message from '../helpers/message';

interface IStore {
    dispatch: (someFunc: any) => void
  }

export const login = (body: object) => async (dispatch: IStore['dispatch']) => {
    dispatch({ type: ACTIONS.LOADING, payload: true });
    try {
        const {
            data,
            status
        } = await Api.login(body);
        let authResponse: any = [];
        if (status === 200 || status === 201) {
            authResponse = {
                data,
                status
            };
            const { accessToken , user } = data;
            await AsyncStorage.setItem('token', accessToken);
            dispatch({ type: ACTIONS.SET_USER, payload: { ...user } })
            dispatch({ type: ACTIONS.LOADING, payload: false })
        }
        return authResponse;
    } catch (error) {
        const message = Message.exception(error);
        dispatch({ type: ACTIONS.LOADING, payload: false })
        throw message;
    }
};