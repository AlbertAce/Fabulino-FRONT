import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from "@react-navigation/elements";

export function SplashScreen({ navigation }) {
    const [registroSoplar, setRegistroSoplar] = useState(0.0);
    const [listaResultados, setListaResultados] = useState([]);

    const anadirResultado = () => {
        setListaResultados([...listaResultados, registroSoplar]);
        setRegistroSoplar(0.0);

    }

    const mandarResultadosR = () => {
        anadirResultado();
        console.log("eeeee - " + listaResultados)
        const datos = {
            resgistroSoplar: registroSoplar,
        }
        navigation.navigate('resultado', { datosEnviados: datos })
        console.log("eeee2 - " + listaResultados)
        
    }
    const mandarResultadosT = () => {
        
        console.log("aaaa - " + listaResultados)
        const datos = {
            listaResultados: listaResultados
        }
        navigation.navigate('tabla', { datosEnviados: datos })
    }
    return (
        <View style={styles.container}>
            <Text style={styles.styleTextTitle}>Soplum!!</Text>
            <TextInput
                style={styles.styleTextImput}
                onChangeText={setRegistroSoplar}
                value={String(registroSoplar)}
                keyboardType='numeric'
                onFocus={() => setRegistroSoplar('')} // Cambio: Reiniciar registroSoplar a cadena vacía
>
            </TextInput>

            <TouchableOpacity onPress={mandarResultadosR} style={styles.styleBoton}>
                <Text style={{ textAlign: 'center', }}>Soplar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={mandarResultadosT} style={styles.styleBoton}>
                <Text style={{ textAlign: 'center', }}>Tabla</Text>
            </TouchableOpacity>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkslategrey',
        alignItems: 'center',
        justifyContent: 'center',
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
    }
    ,
    styleTextTitle: {
        color: 'floralwhite',
        fontSize: 24,
        fontWeight: 'bold',
    }
    ,
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
    }

});