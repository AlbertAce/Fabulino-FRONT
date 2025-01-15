import * as React from 'react';
import { useState, useRef } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, PixelRatio } from 'react-native';
import { stylesFull } from 'assets/styles/stylesA';
import { contarToque, resetToques, mandarToques } from 'Juegos/Juego1/conteoToques';
import { stylesBtns } from '../../assets/styles/stylesButtons';




export function Juego1Screen({ route }) {

    const DPaPX = (pixeles) => {
        return pixeles * PixelRatio.get();
    }

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

    const cambioImagenOriginal = () => {
        setTimeout(() => {
            setImagenCabeza(require('assets/images/cuerpo/cabeza/cabezaNinio.png'));
            setImagenBrazoIzq(require('assets/images/cuerpo/brazoIzq/brazoNinioIzq.png'));
            setImagenBrazoDch(require('assets/images/cuerpo/brazoDch/brazoNinioDch.png'));
            setImagenPantalon(require('assets/images/cuerpo/pantalon/pantalonNinio.png'));
            setImagenPiernaDch(require('assets/images/cuerpo/piernaDch/piernaNinioDch.png'));
            setImagenPiernaIzq(require('assets/images/cuerpo/piernaIzq/piernaNinioIzq.png'));
            setImagenTronco(require('assets/images/cuerpo/tronco/troncoNinio.png'));
        }, 1500);
    }

    const [imagenCabeza, setImagenCabeza] = useState(require('assets/images/cuerpo/cabeza/cabezaNinio.png'));
    const cambiarCabeza = () => {
        contarToque('cabeza');
        setImagenCabeza((ImagenCabezaAnterior) =>
            ImagenCabezaAnterior === require('assets/images/cuerpo/cabeza/cabezaNinio.png') ? require('assets/images/cuerpo/cabeza/cabezaNinioSI.png') : require('assets/images/cuerpo/cabeza/cabezaNinio.png')
        );
        if (imagenCabeza === require('assets/images/cuerpo/cabeza/cabezaNinio.png')) {
            cambiarColorPopUp('rgba(88, 181, 0, 0.8)');
            cambiarTexto("Esta zona está permitida siempre y cuando tu quieras\n\nRECUERDA!! tu eres el dueño de tu cuerpo!!");
            setValorZIndex(1);
        }
    };

    const [imagenBrazoIzq, setImagenBrazoIzq] = useState(require('assets/images/cuerpo/brazoIzq/brazoNinioIzq.png'));
    const cambiarBrazoIzq = () => {
        contarToque('brazo');
        setImagenBrazoIzq((ImagenBrazoIzqAnterior) =>
            ImagenBrazoIzqAnterior === require('assets/images/cuerpo/brazoIzq/brazoNinioIzq.png') ? require('assets/images/cuerpo/brazoIzq/brazoNinioIzqSI.png') : require('assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')
        );
        if (imagenBrazoIzq === require('assets/images/cuerpo/brazoIzq/brazoNinioIzq.png')) {
            cambiarColorPopUp('rgba(88, 181, 0, 0.8)');
            cambiarTexto("Esta zona está permitida siempre y cuando tu quieras,\n\nRECUERDA!! Para jugar no es necesario tocar!!");
            setValorZIndex(1);
        }
    };

    const [imagenTronco, setImagenTronco] = useState(require('assets/images/cuerpo/tronco/troncoNinio.png'));
    const cambiarTronco = () => {
        contarToque('pecho');
        setImagenTronco((ImagenTroncoAnterior) =>
            ImagenTroncoAnterior === require('assets/images/cuerpo/tronco/troncoNinio.png') ? require('assets/images/cuerpo/tronco/troncoNinioNO.png') : require('assets/images/cuerpo/tronco/troncoNinio.png')
        );
        if (imagenTronco === require('assets/images/cuerpo/tronco/troncoNinio.png')) {
            cambiarColorPopUp('rgba(169, 0, 0, 0.8)');
            cambiarTexto("RECUERDA!!!! Solo tu puedes tocar esta parte!!\n\nTU padre o madre solo para ayudarte en tus necesidades o ayudarte a vestir\n\nEl doctor delante de tu madre o padre!");
            setValorZIndex(1);
        }
    };

    const [imagenBrazoDch, setImagenBrazoDch] = useState(require('assets/images/cuerpo/brazoDch/brazoNinioDch.png'));
    const cambiarBrazoDch = () => {
        contarToque('brazo');
        setImagenBrazoDch((ImagenBrazoDchAnterior) =>
            ImagenBrazoDchAnterior === require('assets/images/cuerpo/brazoDch/brazoNinioDch.png') ? require('assets/images/cuerpo/brazoDch/brazoNinioDchSI.png') : require('assets/images/cuerpo/brazoDch/brazoNinioDch.png')
        );
        if (imagenBrazoDch === require('assets/images/cuerpo/brazoDch/brazoNinioDch.png')) {
            cambiarColorPopUp('rgba(88, 181, 0, 0.8)');
            cambiarTexto("Esta zona está permitida siempre y cuando tu quieras,\n\nRECUERDA!! Los secretos no son necesarios!!");
            setValorZIndex(1);
        }
    };

    const [imagenPantalon, setImagenPantalon] = useState(require('assets/images/cuerpo/pantalon/pantalonNinio.png'));
    const cambiarPantalon = () => {
        contarToque('cadera');
        setImagenPantalon((ImagenPantalonAnterior) =>
            ImagenPantalonAnterior === require('assets/images/cuerpo/pantalon/pantalonNinio.png') ? require('assets/images/cuerpo/pantalon/pantalonNinioNO.png') : require('assets/images/cuerpo/pantalon/pantalonNinio.png')
        );
        if (imagenPantalon === require('assets/images/cuerpo/pantalon/pantalonNinio.png')) {
            cambiarColorPopUp('rgba(169, 0, 0, 0.8)');
            cambiarTexto("RECUERDA!!!! Solo tu puedes tocar esta parte!!\n\nTU padre o madre solo para ayudarte en tus necesidades o ayudarte a vestir\n\nEl doctor delante de tu madre o padre!");
            setValorZIndex(1);
        }
    };

    const [imagenPiernaIzq, setImagenPiernaIzq] = useState(require('assets/images/cuerpo/piernaIzq/piernaNinioIzq.png'));
    const cambiarPiernaIzq = () => {
        contarToque('pierna');
        setImagenPiernaIzq((ImagenPiernaIzqAnterior) =>
            ImagenPiernaIzqAnterior === require('assets/images/cuerpo/piernaIzq/piernaNinioIzq.png') ? require('assets/images/cuerpo/piernaIzq/piernaNinioIzqSI.png') : require('assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')
        );
        if (imagenPiernaIzq === require('assets/images/cuerpo/piernaIzq/piernaNinioIzq.png')) {
            cambiarColorPopUp('rgba(88, 181, 0, 0.8)');
            cambiarTexto("Esta zona está permitida siempre y cuando tu quieras,\n\nRECUERDA!! Si algo no es divertido o te pone triste, NO ES UN JUEGO");
            setValorZIndex(1);
        }
    };

    const [imagenPiernaDch, setImagenPiernaDch] = useState(require('assets/images/cuerpo/piernaDch/piernaNinioDch.png'));
    const cambiarPiernaDch = () => {
        contarToque('pierna');
        setImagenPiernaDch((ImagenPiernaDchAnterior) =>
            ImagenPiernaDchAnterior === require('assets/images/cuerpo/piernaDch/piernaNinioDch.png') ? require('assets/images/cuerpo/piernaDch/piernaNinioDchSI.png') : require('assets/images/cuerpo/piernaDch/piernaNinioDch.png')
        );
        if (imagenPiernaDch === require('assets/images/cuerpo/piernaDch/piernaNinioDch.png')) {
            cambiarColorPopUp('rgba(88, 181, 0, 0.8)');
            cambiarTexto("Esta zona está permitida siempre y cuando tu quieras,\n\nRECUERDA!! Si algo no es divertido o te pone triste, NO ES UN JUEGO");
            setValorZIndex(1);
        }
    };

    const backPopup = () => {
        cambiarValorZIndex();
        cambioImagenOriginal();
    }


    return (
        <ImageBackground source={require('assets/images/Fondo_fabulino.png')} style={stylesFull.background}>
            <View style={stylesFull.container}>
                <View style={[styles.respuesta, { backgroundColor: colorPopUp, zIndex: valorZIndex }]}>
                    <TouchableOpacity style={styles.botonAtras} onPress={backPopup}>
                        <Image style={[styles.iconoAtras, { zIndex: valorZIndex }]} source={require('assets/images/iconos/atras.png')} />
                    </TouchableOpacity>
                    <Text style={styles.texto}>{texto}</Text>
                </View>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-29.4) }] }} onPress={cambiarCabeza}>
                        <Image
                            source={imagenCabeza}
                            style={[styles.cabeza]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-32) }, { translateX: DPaPX(37) }] }} onPress={cambiarBrazoIzq}>
                        <Image
                            source={imagenBrazoIzq}
                            style={[styles.brazoIzq]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-39) }, { translateX: DPaPX(10) }] }} onPress={cambiarTronco}>
                        <Image
                            source={imagenTronco}
                            style={[styles.cuerpo]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-31.2) }, { translateX: DPaPX(-15.5) }] }} onPress={cambiarBrazoDch}>
                        <Image
                            source={imagenBrazoDch}
                            style={[styles.brazoDch]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-58.5) }] }} onPress={cambiarPantalon}>
                        <Image
                            source={imagenPantalon}
                            style={[styles.pantalon]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-70.9) }, { translateX: DPaPX(8.8) }] }} onPress={cambiarPiernaIzq}>
                        <Image
                            source={imagenPiernaIzq}
                            style={[styles.piernaIzq]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                    <TouchableOpacity style={{ transform: [{ translateY: DPaPX(-72.2) }, { translateX: DPaPX(-8.8) }] }} onPress={cambiarPiernaDch}>
                        <Image
                            source={imagenPiernaDch}
                            style={[styles.piernaDch]}
                            resizeMode="contain"
                        /></TouchableOpacity>
                </View>
                <View>
                    <Text style={[styles.texto, { transform: [{ translateY: -172 }, { translateX: 60 }], color: 'black', }]}> Terminar </Text>
                    <TouchableOpacity style={[styles.botonAtras, {
                        transform: [{ translateY: -180 }, { translateX: 190 }],
                    }]} onPress={() => {
                        if (mandarToques('a')) {
                            resetToques();
                        }
                    }}>
                        <Image style={[styles.iconoAtras]} source={require('assets/images/iconos/atras.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    texto: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        margin: 10,
        color: '#DDF7C4',
        fontSize: 24,
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
        height: 260
    },
    brazoIzq: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
    },
    cuerpo: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
    },
    brazoDch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 180,
        height: 160,
    },
    pantalon: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 205,
        height: 185
    },
    piernaIzq: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 130,
    },
    piernaDch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 130,
    },
});