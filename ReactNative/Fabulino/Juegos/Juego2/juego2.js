import * as React from 'react';
import { useState, useRef } from 'react';
import { SafeAreaView, Text, ScrollView, View, Image, ImageBackground, StyleSheet, PanResponder, Animated } from 'react-native';
import { stylesFull } from 'assets/styles/stylesA';
import { stylesBtns } from 'assets/styles/stylesButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Juego2Screen({ navigation }) {
    const [opacidadSelecionada,setOpacidadSeleccionada] = useState(1);


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('assets/images/Fondo_fabulino.png')} style={stylesFull.background}>

                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={stylesFull.container}>
                        <View style={stylesFull.row}>
                            <TouchableOpacity 
                            style={stylesBtns.botonRedondo}
                            onPress={()=>setOpacidadSeleccionada(1)}>
                                <Image
                                    source={require('assets/images/caras/confuso.png')}
                                    style={[styles.emoji, { opacity: opacidadSelecionada==1 ? 1 : 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>


                            <TouchableOpacity 
                            style={stylesBtns.botonRedondo}
                            onPress={()=>setOpacidadSeleccionada(2)}>
                                <Image
                                    source={require('assets/images/caras/emocion.png')}
                                    style={[styles.emoji, { opacity: opacidadSelecionada==2 ? 1 : 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesBtns.botonRedondo}>
                                <Image
                                    source={require('assets/images/caras/feliz.png')}
                                    style={[styles.emoji, { opacity: 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesBtns.botonRedondo}>
                                <Image
                                    source={require('assets/images/caras/miedo.png')}
                                    style={[styles.emoji, { opacity: 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                        </View>

                        <View style={stylesFull.row}>

                            <TouchableOpacity style={stylesBtns.botonRedondo}>
                                <Image
                                    source={require('assets/images/caras/rabia.png')}
                                    style={[styles.emoji, { opacity: 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesBtns.botonRedondo}>
                                <Image
                                    source={require('assets/images/caras/sorpresa.png')}
                                    style={[styles.emoji, { opacity: 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesBtns.botonRedondo}>
                                <Image
                                    source={require('assets/images/caras/timidez.png')}
                                    style={[styles.emoji, { opacity: 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                            <TouchableOpacity style={stylesBtns.botonRedondo}>
                                <Image
                                    source={require('assets/images/caras/triste.png')}
                                    style={[styles.emoji, { opacity: 0.5 }]}
                                    resizeMode="contain"
                                />
                            </TouchableOpacity>

                        </View>

                    </View>
                    <View style={[stylesFull.row]}>
                        <Image
                            source={require('assets/images/imagenesJuego2/Imagen_forcejeo.png')}
                            style={styles.imagenes}
                            resizeMode='stretch'
                        />
                    </View>
                    <View style={stylesFull.row}>
                        <TouchableOpacity style={stylesBtns.botonInferior} onPress={() => resetPosicion()}>
                            <Text style={stylesBtns.textoBoton}>Atras</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesBtns.botonInferior} onPress={() => resetPosicion()}>
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
        width: 75,
        height: 75,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imagenes: {
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
        width: 400,

    }
});