import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import useSpinner from './SpinOff/SpinOff';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { stylesFull } from 'assets/styles/stylesA';

export function SplashScreen({ navigation }) {
    const [fontsLoaded] = useFonts({
        'MTFBirthdayBash': require('./assets/fonts/MTFBirthdayBash.ttf'),
    });//esto es para usar la fuente importada
    const [displayImagen, setDisplayImagen] = useState('none')
    const animationRef = useRef(null);
    const cargandoRef = useRef(null);
    const newAnimationRef = useRef(null);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const cambiarMute = () => {
        setIsMuted(prevState => !prevState);
    };


    const cambiarMenu = () => {
        Animated.timing(animatedValue, {
            toValue: isExpanded ? 0 : 1,
            duration: 0,
            useNativeDriver: true,
        }).start(() => setIsExpanded(!isExpanded));
    };

    // Altura animada del menú desplegable
    const menuHeight = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1], // Altura del menú
    });


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
            <View style={styles.containerAll}>
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
                        source={require('./assets/images/LOGOaNIMADO8.png')}
                        style={[styles.imagen, { display: displayImagen }]}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.BotonJugar}>
                    <TouchableOpacity
                        style={stylesFull.styleBoton}
                        onPress={() => navigation.navigate('menu')}
                    >
                        <Text style={stylesFull.buttonText}>jugar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.AjustesAbsolute}>
                    <View style={styles.AjustesUbicacion}>
                        <TouchableOpacity style={[styles.Ajustes, { display: isExpanded ? 'none' : 'flex', }]} onPress={cambiarMenu}>
                            <Ionicons name="settings-outline" size={24} color="white" />
                        </TouchableOpacity>
                        <Animated.View
                            style={[
                                styles.dropdown,
                                {
                                    transform: [{ scaleY: menuHeight }], // Usa scaleY para animar la altura
                                    opacity: animatedValue.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [0, 1], // Se vuelve visible a medida que se expande
                                    }),
                                    display: isExpanded ? 'flex' : 'none', // Para ocultar/mostrar el menú
                                },
                            ]}
                        >
                            <TouchableOpacity style={styles.dropdownItem} onPress={cambiarMute}>
                                <Ionicons name={isMuted ? "volume-mute" : "volume-high"} size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.dropdownItem}
                                onPress={() => navigation.navigate('NuevaPagina')}
                            >
                                <Ionicons name="person" size={24} color="white" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dropdownItem} onPress={cambiarMenu}>
                                <Ionicons name="settings-outline" size={24} color="white" />
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    containerAll: {
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
    animation: {
        width: 125,
        height: 125,
    },
    cargando: {
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
    BotonJugar: {
        flex: 1,
        display: 'grid',
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: 50,
    },
    // Ajustes
    AjustesAbsolute: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    Ajustes: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        width: 55,
        borderColor: 'darkgreen',
        color: '#22828',
        backgroundColor: '#52A900',
        borderWidth: 3,
        borderRadius: 50,
        margin: 16,
    }, AjustesUbicacion: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '100%',
        position: 'absolute',
    }, IconoAjustes: {
        flex: 1,
        width: '90%',
    }, dropdown: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 55,
        borderColor: 'darkgreen',
        color: '#22828',
        backgroundColor: '#52A900',
        borderWidth: 3,
        borderRadius: 50,
        margin: 16,
        position: 'relative',
    },
    dropdownItem: {
        padding: 10,
    }
});