import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SplashScreen } from './splash'
import { Pagina2Screen } from './pagina2'
export function Pagina1Screen({ route }) {

    const navigation = useNavigation();
    const [colorA, setColorA] = useState('gray')
    const [colorB, setColorB] = useState('gray')
    const [colorC, setColorC] = useState('gray')
    const [colorSA, setColorSA] = useState('')
    const [colorSB, setColorSB] = useState('')
    const [colorSC, setColorSC] = useState('')
    const { datosEnviados } = route.params;
    const datoR = datosEnviados.resgistroSoplar;

    useEffect(() => {
        console.log('dato=' + datoR);
        
        aplicarColor();
        
    }, []);

    const aplicarColor = () => {
        if (datoR == 0) {
            setColorA('green');
            setColorB('gray');
            setColorC('gray');
            setColorSA('#A6DCAF');
            setColorSB('darkslategrey');
            setColorSC('darkslategrey');
        }
        if (datoR > 0 && datoR < 0.25) {
            setColorA('gray');
            setColorB('yellow');
            setColorC('gray');
            setColorSA('darkslategrey');
            setColorSB('#D5DCA6');
            setColorSC('darkslategrey');
        }
        if (datoR > 0.25) {
            setColorA('gray');
            setColorB('gray');
            setColorC('red');
            setColorSA('darkslategrey');
            setColorSB('darkslategrey');
            setColorSC('#DCA6A9');
        }

        console.log('datoR= ' + datoR);
        console.log('colorA= ' + colorA);
        console.log('colorB= ' + colorB);
        console.log('colorC= ' + colorC);
        console.log('colorSA= ' + colorSA);
        console.log('colorSB= ' + colorSB);
        console.log('colorSC= ' + colorSC);

    }
    return (

        <View style={styles.container}>
            <Text style={styles.styleTextImput}>{datosEnviados.resgistroSoplar}</Text>
            <View style={styles.row}>
                <View style={[styles.luces, { backgroundColor: colorA, borderColor: colorSA }]}></View>
                <View style={[styles.luces, { backgroundColor: colorB, borderColor: colorSB }]}></View>
                <View style={[styles.luces, { backgroundColor: colorC, borderColor: colorSC }]}></View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategrey',
        alignItems: 'center',
        justifyContent: 'start',
    },
    styleTextImput: {
        textAlignVertical: 'center',
        borderColor: 'darkgrey',
        borderWidth: 3,
        height: 72,
        width: 184,
        backgroundColor: 'burlywood',
        textAlign: 'center',
        margin: 16,
        marginTop: 80,
        color: '#222828',
        fontSize: 32,
    },
    luces: {
        height: 56,
        width: 56,
        borderRadius: 30,
        borderWidth: 6,
        borderColor: 'darkslategrey',
        marginTop: 80,
        marginHorizontal: 24,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});