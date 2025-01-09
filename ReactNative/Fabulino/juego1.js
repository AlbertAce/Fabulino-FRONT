import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export function Juego1Screen({ route }) {

    const [cabeza, setCabeza] = useState("cabezaNinio.png");
    const [brazoIzq, setBrazoIzq] = useState("brazoNinioIzq.png");
    const [cuerpo, setCuerpo] = useState("cuerpoNinio.png");
    const [brazoDch, setBrazoDch] = useState("brazoNinioDch.png");
    const [pantalon, setPantalon] = useState("pantalonNinio.png");
    const [piernaIzq, setPiernaIzq] = useState("piernaNinioIzq.png");
    const [piernaDch, setPiernaDch] = useState("piernaNinioDch.png");

    const comprobar = () => {
        
    }


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
                    <TouchableOpacity
                        onPress={() => comprobar()}
                    ><Image
                        source={require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')}
                        style={[styles.brazoIzq]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/tronco/troncoNinio.png')}
                        style={[styles.cuerpo]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png')}
                        style={[styles.brazoDch]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/pantalon/pantalonNinio.png')}
                        style={[styles.pantalon]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')}
                        style={[styles.piernaIzq]}
                        resizeMode="contain"
                    /></TouchableOpacity>
                    <TouchableOpacity><Image
                        source={require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png')}
                        style={[styles.piernaDch]}
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
        width: 280,
        height: 260,
        transform: [{ translateY: -100 }],
    },
    brazoIzq: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
        transform: [{ translateY: -105 }, {translateX: 100 }],
    },
    cuerpo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
        transform: [{ translateY: -125 }, {translateX: 35 }],
    },
    brazoDch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
        transform: [{ translateY: -105 }, {translateX: -29 }],
    },
    pantalon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 205,
        height: 185,
        transform: [{  translateY: -174 }],
    },
    piernaIzq: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 130,
        transform: [{  translateY: -205 }, {  translateX: 22 }],
    },
    piernaDch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 130,
        transform: [{  translateY: -208 }, {  translateX: -21 }],
    },
});