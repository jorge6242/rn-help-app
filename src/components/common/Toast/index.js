import React from 'react';
import {View, Animated, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import setToast from '../../../actions/toast.action';

export default function Toast() {
  const {
    toastReducer: {status, message, type},
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const getTypeColor = (type) => {
    switch (type) {
      case 'success':
        return '#27ae60';
      case 'error':
        return '#c0392b';
      default:
        return '#27ae60';
    }
  };

  return (
    <View style={{display: status ? 'flex' : 'none'}}>
      <Animated.View
        style={{
          transform: [{translateY: -70}],
          height: 70,
          backgroundColor: getTypeColor(type),
          position: 'absolute',
          left: 0,
          top: 0,
          right: 0,
          justifyContent: 'center',
        }}>
        <View style={{flex: 1, flexDirection: 'row', marginTop: 10}}>
          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              width: '50%',
            }}>
            {message}
          </Text>
          <Text
            style={{
              marginLeft: 10,
              color: 'white',
              fontSize: 16,
              fontWeight: 'bold',
              width: '40%',
              textAlign: 'right',
            }}
            onPress={() =>
              dispatch(
                setToast({
                  payload: {
                    message: '',
                    status: false,
                    type: 'success',
                  },
                }),
              )
            }>
            X
          </Text>
        </View>
      </Animated.View>
    </View>
  );
}
