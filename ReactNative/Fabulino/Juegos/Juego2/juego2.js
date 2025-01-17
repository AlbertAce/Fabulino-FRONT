import * as React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, ScrollView, View, Image, ImageBackground, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { stylesFull } from 'assets/styles/stylesA';
import { stylesBtns } from 'assets/styles/stylesButtons';
import { contarToque, resetToques, mandarToques } from 'Juegos/Juego2/conteoCaras';


export function Juego2Screen({ navigation }) {
    
    const {width, height } = Dimensions.get('window') 

    const [opacidades, setOpacidades] = useState({
        confusion: 0.5,
        emocion: 0.5,
        felicidad: 0.5,
        miedo: 0.5,
        rabia: 0.5,
        sorpresa: 0.5,
        timidez: 0.5,
        tristeza: 0.5,
    });

    const cambiarOpacidad = (imagen) => {
        setOpacidades((prevOpacidades) => ({
            ...prevOpacidades,
            [imagen]: prevOpacidades[imagen] === 1 ? 0.5 : 1,
        }));
    };

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    const imagenes = {
        confusion: require('assets/images/caras/confuso.png'),
        emocion: require('assets/images/caras/emocion.png'),
        felicidad: require('assets/images/caras/feliz.png'),
        miedo: require('assets/images/caras/miedo.png'),
        rabia: require('assets/images/caras/rabia.png'),
        sorpresa: require('assets/images/caras/sorpresa.png'),
        timidez: require('assets/images/caras/timidez.png'),
        tristeza: require('assets/images/caras/triste.png'),
    };

    const pulsarEmojis = (emocion)=>{
        cambiarOpacidad(emocion),
        contarToque(emocion)
    }

    const emoticonos = (emocion) => {
        const capitalizedEmotion = capitalizeFirstLetter(emocion);
        return (
            <View style={[styles.imageContainer]} key={emocion}>
                <TouchableOpacity
                    style={[stylesBtns.botonRedondo, styles.imageContainer]}
                    onPress={() => pulsarEmojis(emocion)}>
                    <View style={[styles.imageContainer, styles.imagenes]}>
                        <Image
                            source={imagenes[emocion]}
                            style={[
                                opacidades[emocion] === 1 ? styles.tamanioOn : styles.tamanioOff,
                                { opacity: opacidades[emocion] }
                            ]}
                            resizeMode="contain"
                        />
                    </View>
                </TouchableOpacity>
                <Text style={[styles.textoEmoji]}>{capitalizedEmotion}</Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('assets/images/Fondo_fabulino.png')} style={stylesFull.background}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={stylesFull.container}>
                        <View>
                            <Text>
                                ¿QUE EMOCIONES SIENTES AL VER LAS IMAGENES?
                            </Text>
                        </View>
                        <View style={stylesFull.row}>
                            {emoticonos('confusion')}
                            {emoticonos('emocion')}
                            {emoticonos('felicidad')}
                            {emoticonos('miedo')}
                        </View>
                        <View style={stylesFull.row}>
                            {emoticonos('rabia')}
                            {emoticonos('sorpresa')}
                            {emoticonos('timidez')}
                            {emoticonos('tristeza')}
                        </View>
                    </View>
                    <View style = {[styles.imageContainer]}>
                        <Image
                            source={require('assets/images/imagenesJuego2/Imagen_forcejeo.jpeg')}
                            style={{height:height*.25, width:width*.9 ,borderRadius:20,}}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={stylesFull.row}>
                        <TouchableOpacity style={stylesBtns.botonInferior} onPress={() => {}}>
                            <Text style={stylesBtns.textoBoton}>Atras</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesBtns.botonInferior} onPress={() => {}}>
                            <Text style={stylesBtns.textoBoton}>Siguiente</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    emoji: {
        width: 100,
        height: 100,
    },

    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    tamanioOn: {
        width: 70,
        height: 70,
    },
    tamanioOff: {
        width: 55,
        height: 55,
    },
    textoEmoji: {
        textAlign: 'center',
        marginTop: 5,
        color:'#52A900',
        fontWeight:'bold',
    },
});