import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export function Juego1Screen({ route }) {

    const [imagenCabeza, setImagenCabeza] = useState(require('./assets/images/cuerpo/cabeza/cabezaNinio.png'));
    const cambiarCabeza = () => {
        setImagenCabeza((ImagenCabezaAnterior) =>
            ImagenCabezaAnterior === require('./assets/images/cuerpo/cabeza/cabezaNinio.png') ? require('./assets/images/cuerpo/cabeza/cabezaNinioSI.png') : require('./assets/images/cuerpo/cabeza/cabezaNinio.png')
        );
    };

    const [imagenBrazoIzq, setImagenBrazoIzq] = useState(require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png'));
    const cambiarBrazoIzq = () => {
        setImagenBrazoIzq((ImagenBrazoIzqAnterior) =>
            ImagenBrazoIzqAnterior === require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png') ? require('./assets/images/cuerpo/brazoIzq/brazoNinioIzqSI.png') : require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')
        );
    };

    const [imagenTronco, setImagenTronco] = useState(require('./assets/images/cuerpo/tronco/troncoNinio.png'));
    const cambiarTronco = () => {
        setImagenTronco((ImagenTroncoAnterior) =>
            ImagenTroncoAnterior === require('./assets/images/cuerpo/tronco/troncoNinio.png') ? require('./assets/images/cuerpo/tronco/troncoNinioNO.png') : require('./assets/images/cuerpo/tronco/troncoNinio.png')
        );
    };

    const [imagenBrazoDch, setImagenBrazoDch] = useState(require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png'));
    const cambiarBrazoDch = () => {
        setImagenBrazoDch((ImagenBrazoDchAnterior) =>
            ImagenBrazoDchAnterior === require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png') ? require('./assets/images/cuerpo/brazoDch/brazoNinioDchSI.png') : require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png')
        );
    };

    const [imagenPantalon, setImagenPantalon] = useState(require('./assets/images/cuerpo/pantalon/pantalonNinio.png'));
    const cambiarPantalon = () => {
        setImagenPantalon((ImagenPantalonAnterior) =>
            ImagenPantalonAnterior === require('./assets/images/cuerpo/pantalon/pantalonNinio.png') ? require('./assets/images/cuerpo/pantalon/pantalonNinioNO.png') : require('./assets/images/cuerpo/pantalon/pantalonNinio.png')
        );
    };

    const [imagenPiernaIzq, setImagenPiernaIzq] = useState(require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png'));
    const cambiarPiernaIzq = () => {
        setImagenPiernaIzq((ImagenPiernaIzqAnterior) =>
            ImagenPiernaIzqAnterior === require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png') ? require('./assets/images/cuerpo/piernaIzq/piernaNinioIzqSI.png') : require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')
        );
    };

    const [imagenPiernaDch, setImagenPiernaDch] = useState(require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png'));
    const cambiarPiernaDch = () => {
        setImagenPiernaDch((ImagenPiernaDchAnterior) =>
            ImagenPiernaDchAnterior === require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png') ? require('./assets/images/cuerpo/piernaDch/piernaNinioDchSI.png') : require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png')
        );
    };

    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={[styles.respuesta, { zIndex: -1 }]}>
                    
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={cambiarCabeza}>
                        <Image
                            source={imagenCabeza}
                            style={[styles.cabeza]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={cambiarBrazoIzq}>
                        <Image
                            source={imagenBrazoIzq}
                            style={[styles.brazoIzq]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={cambiarTronco}>
                        <Image
                            source={imagenTronco}
                            style={[styles.cuerpo]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={cambiarBrazoDch}>
                        <Image
                            source={imagenBrazoDch}
                            style={[styles.brazoDch]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={cambiarPantalon}>
                        <Image
                            source={imagenPantalon}
                            style={[styles.pantalon]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity onPress={cambiarPiernaIzq}>
                        <Image
                            source={imagenPiernaIzq}
                            style={[styles.piernaIzq]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                    <TouchableOpacity onPress={cambiarPiernaDch}>
                        <Image
                            source={imagenPiernaDch}
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
    respuesta: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 340,
        height: 580,
        transform: [{ translateY: -80 }],
        backgroundColor: 'darkgreen',
        borderWidth: 5,
        borderRadius: 20,
        borderColor: 'black',
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
        transform: [{ translateY: -105 }, { translateX: 100 }],
    },
    cuerpo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
        transform: [{ translateY: -125 }, { translateX: 35 }],
    },
    brazoDch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
        transform: [{ translateY: -105 }, { translateX: -29 }],
    },
    pantalon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 205,
        height: 185,
        transform: [{ translateY: -174 }],
    },
    piernaIzq: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 130,
        transform: [{ translateY: -205 }, { translateX: 22 }],
    },
    piernaDch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 130,
        transform: [{ translateY: -208 }, { translateX: -21 }],
    },
});