import React from 'react'
import { View, StyleSheet } from 'react-native';
export const PositionScreen = () => {
  return (
    <View style={styles.container}>
        <View style={styles.cajaRoja}/>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
        <View style={styles.cajaVerde}/>
        <View style={styles.cajaAmarilla}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#28C4D9',
    },
    cajaMorada: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cajaNaranja: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        right: 0,
      
    },
    cajaVerde: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
    },
    cajaRoja: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderWidth: 10,
        borderColor: 'white',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    cajaAmarilla: {
        width: 100,
        height: 100,
        backgroundColor: 'yellow',
        borderWidth: 10,
        borderColor: 'white',
        top: 0,
        left: 0,
    }
});