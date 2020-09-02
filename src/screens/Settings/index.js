import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

function Settings() {
  const {
    genderReducer: {loading},
  } = useSelector((state) => state);
  console.log('loading ', loading);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings component</Text>
      { loading && (<Text style={styles.title}>Loading Component</Text>) }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 20,
  },
});

export default Settings;
