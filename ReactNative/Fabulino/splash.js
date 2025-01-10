import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import useSpinner from './SpinOff/SpinOff';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { stylesFull } from 'assets/styles/stylesA';

export function SplashScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'MTFBirthdayBash': require('./assets/fonts/MTFBirthdayBash.ttf'),
    });//esto es para usar la fuente importada
    const [displayImagen, setDisplayImagen] = useState('none')
    const animationRef = useRef(null);
    const cargandoRef = useRef(null);
    const newAnimationRef = useRef(null);


    const [isNewAnimationVisible, setNewAnimationVisible] = useState(false);

    // Usar el hook de animación con una duración específica
    const isAnimationVisible = useSpinner(animationRef, 6800, () => {
        // Callback cuando la primera animación termine
        setNewAnimationVisible(true);
    });



    const isCargandoVisible = useSpinner(cargandoRef, 6800, () => { });

    const isAnotherAnimationVisible = useSpinner(newAnimationRef, 2000, () => { setDisplayImagen('bloc') });

    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={stylesFull.background}>
            <View style={stylesFull.container}>
                {isAnimationVisible && (
                    <LottieView
                        ref={animationRef}
                        source={require('./assets/animaciones/F_logo_carga.json')}
                        autoPlay={false}
                        loop
                        style={styles.animation}
                    />
                )}

                {isCargandoVisible && (
                    <LottieView
                        ref={cargandoRef}
                        source={require('./assets/animaciones/cargando.json')}
                        autoPlay={false}
                        loop
                        style={styles.cargando}
                    />
                )}
                {isNewAnimationVisible && isAnotherAnimationVisible && (
                    <LottieView
                        ref={newAnimationRef}
                        source={require('./assets/animaciones/logo_animacion.json')}
                        autoPlay
                        loop={false}
                        style={styles.newAnimation}
                    />
                )}
                <Image
                    source={require('./assets/images/logoFondo1.png')}
                    style={[styles.imagen, { display: displayImagen }]}
                    resizeMode="contain"
                />
                <TouchableOpacity
                    style={stylesFull.styleBoton}
                    onPress={() => { 
                        navigation.navigate('menu');
                    }} // Función vacía para el evento onPress
                >
                    <Text style={styles.buttonText}>jugar</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    styleTextImput: {
        borderColor: 'darkgrey',
        borderWidth: 3,
        height: 72,
        width: 184,
        backgroundColor: 'burlywood',
        textAlign: 'center',
        margin: 16,
        color: '#222828',
        fontSize: 32,
    },
    styleTextTitle: {
        color: 'floralwhite',
        fontSize: 24,
        fontWeight: 'bold',
    },
    animation: {
        width: 125,
        height: 125,
    },
    cargando: {
        width: 150,
        height: 150,
    },
    imagen: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 150,
    },
    newAnimation: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
    },
    buttonText: {
        color: '#222828',
        fontSize: 24,
        padding: 16,
        fontFamily: 'MTFBirthdayBash', // Usar la fuente personalizad
    },
});