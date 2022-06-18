import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const BoxObjectModel = () => {
  return (
    <View style={ styles.container }>
        <Text style={styles.title}>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
    
    },
    title: {
        textAlign: 'center',
        paddingVertical: '25%',
        marginHorizontal: '25%',
        fontSize: 20,
        borderWidth: 5,

        // backgroundColor: 'green'
    }
});


