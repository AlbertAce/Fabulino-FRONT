import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export function Juego1Screen({ route }) {
    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={styles.row}>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/cabeza/cabezaNinio.png')}
                        style={[styles.cabeza]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')}
                        style={[styles.cuerpo]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/tronco/troncoNinio.png')}
                        style={[styles.cabeza]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png')}
                        style={[styles.cabeza]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/pantalon/pantalonNinio.png')}
                        style={[styles.cabeza]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')}
                        style={[styles.cabeza]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png')}
                        style={[styles.cabeza]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
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
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover', // La propiedad resizeMode determina cómo se ajusta la imagen dentro del componente ImageBackground.
    },
    cabeza: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 150,
    },
    cabeza: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 150,
        transform: [{ rotate: '-45deg' }],
    },
});