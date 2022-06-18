import React from 'react'
import { View, Text, StyleSheet, Dimensions, useWindowDimensions } from 'react-native';

// const { width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {

    const { width, height } = useWindowDimensions();
    return (
        <View>
            <View style={ styles.container}>
                <View style={ {
                    ...styles.cajaMorada,
                    width: width * .50
                
                } }/>
                <View style={ styles.cajaNaranja }/>
            </View>
            <Text style={styles.title}>W: { width }, H: { height }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 500,
        backgroundColor: 'red'
    },
    cajaMorada: {
        backgroundColor: '#5856D6',
        height: '50%',
    },
    cajaNaranja: {
        backgroundColor: '#F0A23B',
    },
    title: {
        fontSize: 30,
        textAlign: 'center'
    }
});