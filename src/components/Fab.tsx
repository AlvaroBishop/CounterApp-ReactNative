import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native';

interface Props {
    title: string,
    position?: 'br' | 'bl',
    onPress: () => void,

}
export const Fab = ({title, onPress, position = 'br'}: Props) => {

    const ios = () => {
        return (
            <View
                style={ [
                    styles.fabLocation, 
                    ( position === 'bl') ? {left: 25} : {right: 25}
                ] }
            >
                <TouchableOpacity
                    activeOpacity={ 0.75 }
                    onPress={ onPress }
                > 
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    const android = () => {
        return (
            <View
                style={ [
                    styles.fabLocation, 
                    ( position === 'bl') ? {left: 25} : {right: 25}
                ] }
            >
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple('#8cfffd', true, 30)}
                    onPress={ onPress }
                > 
                    <View style={styles.fab}>
                        <Text style={styles.fabText}>{title}</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    }

    return (Platform.OS === 'ios') ? ios() : android();
}

const styles = StyleSheet.create({
    
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    },
    
    fab: {
        backgroundColor: 'black',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
