import * as React from 'react';
import { useState, useRef } from 'react';
import { SafeAreaView, Text,ScrollView, View, Image, ImageBackground, StyleSheet, PanResponder, Animated } from 'react-native';
import { stylesFull } from 'assets/styles/stylesA';
import { stylesBtns } from 'assets/styles/stylesButtons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Juego2Screen({ navigation }) {
    const pan1 = useRef(new Animated.ValueXY({ x: -220, y: 0 })).current;
    const pan2 = useRef(new Animated.ValueXY({ x: -110, y: 0 })).current;
    const pan3 = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const pan4 = useRef(new Animated.ValueXY({ x: 110, y: 0 })).current;
    const pan5 = useRef(new Animated.ValueXY({ x: -220, y: 110 })).current;
    const pan6 = useRef(new Animated.ValueXY({ x: -110, y: 110 })).current;
    const pan7 = useRef(new Animated.ValueXY({ x: 0, y: 110 })).current;
    const pan8 = useRef(new Animated.ValueXY({ x: 110, y: 110 })).current;

    const resetPosicion = () => {
        pan1.setValue({ x: -220, y: 0 });
        pan2.setValue({ x: -110, y: 0 });
        pan3.setValue({ x: 0, y: 0 });
        pan4.setValue({ x: 110, y: 0 });
        pan5.setValue({ x: -220, y: 110 });
        pan6.setValue({ x: -110, y: 110 });
        pan7.setValue({ x: 0, y: 110 });
        pan8.setValue({ x: 110, y: 110 });
        console.log('Botón presionado');
    }


    const createPanResponder = (pan) => {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: () => {
                pan.extractOffset();
            }
        });
    };

    const panResponder1 = useRef(createPanResponder(pan1)).current;
    const panResponder2 = useRef(createPanResponder(pan2)).current;
    const panResponder3 = useRef(createPanResponder(pan3)).current;
    const panResponder4 = useRef(createPanResponder(pan4)).current;
    const panResponder5 = useRef(createPanResponder(pan5)).current;
    const panResponder6 = useRef(createPanResponder(pan6)).current;
    const panResponder7 = useRef(createPanResponder(pan7)).current;
    const panResponder8 = useRef(createPanResponder(pan8)).current;

    return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView keyboardShouldPersistTaps="handled">
                    <View style={stylesFull.container}>
                        <View style={stylesFull.row}>
                            <Animated.View
                                {...panResponder1.panHandlers}
                                style={[pan1.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/confuso.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Animated.View
                                {...panResponder2.panHandlers}
                                style={[pan2.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/emocion.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Animated.View
                                {...panResponder3.panHandlers}
                                style={[pan3.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/feliz.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Animated.View
                                {...panResponder4.panHandlers}
                                style={[pan4.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/miedo.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                        </View>

                        <View style={stylesFull.row}>
                            <Animated.View
                                {...panResponder5.panHandlers}
                                style={[pan5.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/rabia.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Animated.View
                                {...panResponder6.panHandlers}
                                style={[pan6.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/sorpresa.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Animated.View
                                {...panResponder7.panHandlers}
                                style={[pan7.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/timidez.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                            <Animated.View
                                {...panResponder8.panHandlers}
                                style={[pan8.getLayout(), styles.draggableContainer]}
                            >
                                <Image
                                    source={require('assets/images/caras/triste.png')}
                                    style={styles.imagen}
                                    resizeMode="contain"
                                />
                            </Animated.View>
                        </View>

                    </View>

                </ScrollView>
                <TouchableOpacity style={stylesBtns.botonInferior} onPress={() =>resetPosicion()}>
                        <Text style={stylesBtns.textoBoton}>RESET</Text>
                    </TouchableOpacity>
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    imagen: {
        width: 100,
        height: 100,
    },
    draggableContainer: {
        position: 'absolute',
    },
});