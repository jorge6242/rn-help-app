import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Chat() {
    return (
        <View style={styles.container}><View>
            <Text style={styles.title}>Chat component</Text>
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

export default Chat;