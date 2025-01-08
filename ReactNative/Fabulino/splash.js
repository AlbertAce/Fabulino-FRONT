import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import useSpinner from './SpinOff/SpinOff';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';

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
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={styles.background}>
            <View style={styles.container}>
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
                    style={styles.styleBoton}
                    onPress={() => { }} // Función vacía para el evento onPress
                >
                    <Text style={styles.buttonText}>jugar</Text>
                </TouchableOpacity>

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover', // La propiedad resizeMode determina cómo se ajusta la imagen dentro del componente ImageBackground.
    },
    container: {
        marginTop: 140,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
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
    styleBoton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 144,
        borderColor: 'darkgrey',
        color: '#222828',
        backgroundColor: 'floralwhite',
        borderWidth: 3,
        borderRadius: 20,
        margin: 16,
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
        fontFamily: 'MTFBirthdayBash', // Usar la fuente personalizad
    },
});