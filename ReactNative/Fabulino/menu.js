import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export function MenuScreen({ navigation }) {
    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.styleBoton} onPress={() => navigation.navigate('juego1')}>
                        <Text style={styles.buttonText}>Juego A</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.styleBoton} onPress={() => navigation.navigate('juego2')}>
                        <Text style={styles.buttonText}>Juego B</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.styleBoton} onPress={() => navigation.navigate('juego3')}>
                        <Text style={styles.buttonText}>Juego C</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover',
    },
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
    styleBoton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 164,
        borderColor: 'black',
        color: '#222828',
        backgroundColor: '#52A900',
        marginTop: 60,
        borderWidth: 3,
        borderRadius: 20,
    },
    buttonText: {
        color: '#DDF7C4',
        fontSize: 24,
        fontFamily: 'MTFBirthdayBash',
    },
});