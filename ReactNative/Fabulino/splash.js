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
                    source={require('./assets/images/LOGOaNIMADO8.png')}
                    style={[styles.imagen, { display: displayImagen }]}
                    resizeMode="contain"
                />
            </View>
            <View style={styles.BotonJugar}>
                <TouchableOpacity
                    style={styles.styleBoton}
                    onPress={() => { }} // Función vacía para el evento onPress
                >
                    <Text style={styles.buttonText}>jugar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.AjustesUbicacion}>
                <TouchableOpacity
                    style={styles.Ajustes}
                    onPress={() => { }} // Función vacía para el evento onPress
                >
                    <Image
                        source={require('./assets/images/img-ajustes/ajuste.png')}
                        style={[styles.IconoAjustes, { display: displayImagen }]}
                        resizeMode="contain"
                    />
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
        flex: 1,
        display: 'grid',
        justifyContent: 'center',
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
        fontSize: 32,
    },
    styleTextTitle: {
        color: 'floralwhite',
        fontSize: 24,
        fontWeight: 'bold',
    },
    styleBoton: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 144,
        borderColor: 'darkgreen',
        color: '#22828',
        backgroundColor: '#214400',
        borderWidth: 3,
        borderRadius: 20,
        margin: 16,
    },
    animation: {
        flex: 1,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        width: 125,
        height: 125,
    },
    cargando: {
        flex: 1,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
    },
    imagen: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 170,
        height: 150,
    },
    newAnimation: {
        flex: 1,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 150,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'MTFBirthdayBash', // Usar la fuente personalizad
    },
    BotonJugar: {
        flex: 1,
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    // Ajustes
    Ajustes: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        borderColor: 'darkgreen',
        color: '#22828',
        backgroundColor:'#52A900',
        borderWidth: 3,
        borderRadius: 50,
        margin: 16,
    }, AjustesUbicacion: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'start',
        width: '100%',
    },IconoAjustes:{
        flex:1,
        width:'90%',
    }
});