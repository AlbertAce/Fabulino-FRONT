import * as React from 'react';
import { useState, useRef } from 'react';
import { View, ImageBackground, Image} from 'react-native';
import LottieView from 'lottie-react-native';
import useSpinner from './SpinOff/SpinOff';
import { useFonts } from 'expo-font';
import { stylesFull } from 'assets/styles/stylesA';

function SplashScreen({ navigation }) {
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
            </View>
        </ImageBackground>
    );
}