import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { stylesFull } from 'assets/styles/stylesA';

export function MenuScreen({ navigation }) {
    return (
        <ImageBackground source={require('./assets/images/Fondo_fabulino.png')} style={stylesFull.background}>
            <View style={stylesFull.container}>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={stylesFull.styleBoton} onPress={() => navigation.navigate('juego1')}>
                        <Text style={stylesFull.buttonText}>Juego A</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={stylesFull.styleBoton} onPress={() => navigation.navigate('juego2')}>
                        <Text style={stylesFull.buttonText}>Juego B</Text>
                    </TouchableOpacity>
                </View>
                <View style={stylesFull.row}>
                    <TouchableOpacity style={stylesFull.styleBoton} onPress={() => navigation.navigate('juego3')}>
                        <Text style={stylesFull.buttonText}>Juego C</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
}
const styles = StyleSheet.create({
});