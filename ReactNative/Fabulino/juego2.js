import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export function Juego2Screen({ navigation }) {
    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={styles.background}>
            <View style={styles.container}>

            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    container: {
        marginTop: 140,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
});