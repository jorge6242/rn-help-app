import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Location() {
    return (
        <View style={styles.container}><View>
            <Text style={styles.title}>Location component</Text>
            </View></View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        marginTop: 20
    }
})

export default Location;