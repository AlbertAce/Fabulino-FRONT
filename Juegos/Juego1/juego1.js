import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';

export function Juego1Screen({ route }) {

    const [colorPopUp, setColorPopUp] = useState("");
    function cambiarColorPopUp(color) {
        setColorPopUp(color);
    }

    const [texto, setTexto] = useState("");
    function cambiarTexto(txt) {
        setTexto(txt);
    }

    const [valorZIndex, setValorZIndex] = useState(-1);
    function cambiarValorZIndex() {
        setValorZIndex(-1);
        cambiarTexto("");
    }

    const [imagenCabeza, setImagenCabeza] = useState(require('./assets/images/cuerpo/cabeza/cabezaNinio.png'));
    const cambiarCabeza = () => {
        setImagenCabeza((ImagenCabezaAnterior) =>
            ImagenCabezaAnterior === require('./assets/images/cuerpo/cabeza/cabezaNinio.png') ? require('./assets/images/cuerpo/cabeza/cabezaNinioSI.png') : require('./assets/images/cuerpo/cabeza/cabezaNinio.png')
        );
        if (imagenCabeza === require('./assets/images/cuerpo/cabeza/cabezaNinio.png')) {
            cambiarColorPopUp('#58B500');
            cambiarTexto("Si te pueden tocar");
            setValorZIndex(1);
        }
    };

    const [imagenBrazoIzq, setImagenBrazoIzq] = useState(require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png'));
    const cambiarBrazoIzq = () => {
        setImagenBrazoIzq((ImagenBrazoIzqAnterior) =>
            ImagenBrazoIzqAnterior === require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png') ? require('./assets/images/cuerpo/brazoIzq/brazoNinioIzqSI.png') : require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')
        );
        if (imagenBrazoIzq === require('./assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')) {
            cambiarColorPopUp('#58B500');
            cambiarTexto("Si te pueden tocar");
            setValorZIndex(1);
        }
    };

    const [imagenTronco, setImagenTronco] = useState(require('./assets/images/cuerpo/tronco/troncoNinio.png'));
    const cambiarTronco = () => {
        setImagenTronco((ImagenTroncoAnterior) =>
            ImagenTroncoAnterior === require('./assets/images/cuerpo/tronco/troncoNinio.png') ? require('./assets/images/cuerpo/tronco/troncoNinioNO.png') : require('./assets/images/cuerpo/tronco/troncoNinio.png')
        );
        if (imagenTronco === require('./assets/images/cuerpo/tronco/troncoNinio.png')) {
            cambiarColorPopUp('#A90000');
            cambiarTexto("No te pueden tocar");
            setValorZIndex(1);
        }
    };

    const [imagenBrazoDch, setImagenBrazoDch] = useState(require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png'));
    const cambiarBrazoDch = () => {
        setImagenBrazoDch((ImagenBrazoDchAnterior) =>
            ImagenBrazoDchAnterior === require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png') ? require('./assets/images/cuerpo/brazoDch/brazoNinioDchSI.png') : require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png')
        );
        if (imagenBrazoDch === require('./assets/images/cuerpo/brazoDch/brazoNinioDch.png')) {
            cambiarColorPopUp('#58B500');
            cambiarTexto("Si te pueden tocar");
            setValorZIndex(1);
        }
    };

    const [imagenPantalon, setImagenPantalon] = useState(require('./assets/images/cuerpo/pantalon/pantalonNinio.png'));
    const cambiarPantalon = () => {
        setImagenPantalon((ImagenPantalonAnterior) =>
            ImagenPantalonAnterior === require('./assets/images/cuerpo/pantalon/pantalonNinio.png') ? require('./assets/images/cuerpo/pantalon/pantalonNinioNO.png') : require('./assets/images/cuerpo/pantalon/pantalonNinio.png')
        );
        if (imagenPantalon === require('./assets/images/cuerpo/pantalon/pantalonNinio.png')) {
            cambiarColorPopUp('#A90000');
            cambiarTexto("No te pueden tocar");
            setValorZIndex(1);
        }
    };

    const [imagenPiernaIzq, setImagenPiernaIzq] = useState(require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png'));
    const cambiarPiernaIzq = () => {
        setImagenPiernaIzq((ImagenPiernaIzqAnterior) =>
            ImagenPiernaIzqAnterior === require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png') ? require('./assets/images/cuerpo/piernaIzq/piernaNinioIzqSI.png') : require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')
        );
        if (imagenPiernaIzq === require('./assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')) {
            cambiarColorPopUp('#58B500');
            cambiarTexto("Si te pueden tocar");
            setValorZIndex(1);
        }
    };

    const [imagenPiernaDch, setImagenPiernaDch] = useState(require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png'));
    const cambiarPiernaDch = () => {
        setImagenPiernaDch((ImagenPiernaDchAnterior) =>
            ImagenPiernaDchAnterior === require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png') ? require('./assets/images/cuerpo/piernaDch/piernaNinioDchSI.png') : require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png')
        );
        if (imagenPiernaDch === require('./assets/images/cuerpo/piernaDch/piernaNinioDch.png')) {
            cambiarColorPopUp('#58B500');
            cambiarTexto("Si te pueden tocar");
            setValorZIndex(1);
        }
    };

    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={styles.background}>
            <View style={styles.container}>
                <View style={[styles.respuesta, { backgroundColor: colorPopUp , zIndex: valorZIndex }]}>
                    <TouchableOpacity style={styles.botonAtras} onPress={cambiarValorZIndex}>
                        <Image style={[styles.iconoAtras, { zIndex: valorZIndex }]} source={require('./assets/images/iconos/atras.png')} />
                    </TouchableOpacity>
                    <Text style={styles.texto}>{texto}</Text>
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
    texto: {
        color: '#DDF7C4',
        fontSize: 36,
        fontWeight: 'bold',
    },
    respuesta: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 340,
        height: 480,
        transform: [{ translateY: -50 }],
        borderWidth: 3,
        borderRadius: 20,
        borderColor: 'black',
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover', // La propiedad resizeMode determina cómo se ajusta la imagen dentro del componente ImageBackground.
    },
    botonAtras: {
        position: 'absolute',
        width: 70,
        height: 70,
        backgroundColor: '#DDF7C4',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 100,
        transform: [{ translateY: -190 }, { translateX: -120 }],
    },
    iconoAtras: {
        position: 'absolute',
        width: 25,
        height: 25,
        transform: [{ translateY: 20 }, { translateX: 18 }, { rotate: '-180deg' }],
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