import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, TextInput, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import { stylesFull } from '../assets/styles/stylesA';
import { stylesBtns } from '../assets/styles/stylesButtons';
import { enviarForm } from '../Formularios/enviarFormBBDD';
import Alerta from './alerta';

export function RegistroScreen({ route, navigation }) {
    const [fontsLoaded] = useFonts({
        'MTFBirthdayBash': require('../assets/fonts/MTFBirthdayBash.ttf'),
    }); // Esto es para usar la fuente importada
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [clave, setClave] = useState('');
    const [verClave, setVerClave] = useState(false);
    const [relacion, setRelacion] = useState('');

    const [modalVisible, setModalVisible] = useState(false);

    // Funciones para mostrar y ocultar la alerta
    const mostrarAlerta = () => {
        setModalVisible(true);
    };

    const ocultarAlerta = () => {
        setModalVisible(false);
    };

    const cambiarClave = () => {
        setVerClave(!verClave);
    };

    const alternarRelacion = (relacion) => {
        setRelacion(relacion);
        console.log(relacion, nombre, email, clave);
    };
    const validateEmail = (text) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setIsValid(emailRegex.test(text));
        setEmail(text);
      };

    function guardar() {
        if (nombre.trim().length > 0 && clave.trim().length > 0) {
            enviarForm(nombre.trim(), email.trim(), clave.trim(), relacion);
        }
        navigation.navigate('menu');
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
            >
                <ImageBackground source={require('../assets/images/Fondo_fabulino.png')} style={stylesFull.background}>
                    <View style={styles.containerAll}>
                        <Alerta
                            visible={modalVisible}
                            onClose={ocultarAlerta}
                        />
                        <View style={styles.stylesTitle}>
                            <View>
                                <TouchableOpacity style={stylesBtns.Ajustes} onPress={() => navigation.goBack()}>
                                    <Ionicons name="arrow-back" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.stylesTitle}>
                                <Text style={styles.textoTitle}>PERSONAL</Text>
                            </View>


                        </View>
                        <View style={styles.containerForm}>
                            <Text style={styles.textoNegrita}>Nombre</Text>
                            <View style={styles.form}>
                                <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5 }]}>
                                    <Ionicons name="person" size={24} color="white" style={{ marginHorizontal: 10 }} />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Escribe tu nombre"
                                    placeholderTextColor="black"
                                    onChangeText={setNombre}
                                />
                            </View>

                            <Text style={styles.textoNegrita}>Email</Text>
                            <View style={styles.form}>
                                <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5 }]}>
                                    <Ionicons name="mail" size={24} color="white" style={{ marginHorizontal: 10 }} />
                                </TouchableOpacity>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Escribe tu email"
                                    placeholderTextColor="black"
                                    onChangeText={validateEmail}
                                />
                            </View>

                            <Text style={styles.textoNegrita}>Clave</Text>
                            <View style={styles.form}>
                                <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5 }]}>
                                    <Ionicons name="key" size={24} color="white" style={{ marginHorizontal: 10 }} />
                                </TouchableOpacity>
                                <View style={styles.claveInput}>
                                    <TextInput
                                        style={[styles.input, { width: 200 }]}
                                        placeholder="Escribe tu clave"
                                        placeholderTextColor="black"
                                        secureTextEntry={!verClave}
                                        onChangeText={setClave}
                                        backgroundColor="transparent"
                                    />
                                    <TouchableOpacity onPress={cambiarClave}>
                                        <Ionicons name={verClave ? 'eye' : 'eye-off'} size={24} color="darkgreen" style={{ marginHorizontal: 0 }} />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <Text style={styles.textoNegrita}>Relación con el niño</Text>
                            <View style={styles.containerformRelacion}>
                                <View style={styles.formRelacion}>
                                    <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5 }, { opacity: relacion === 'tutor' ? 1 : 0.5 }]} onPress={() => alternarRelacion('tutor')}>
                                        <Ionicons name="people" size={24} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5, marginLeft: 25 }, { opacity: relacion === 'psicologo' ? 1 : 0.5 }]} onPress={() => alternarRelacion('psicologo')}>
                                        <FontAwesome5 name="brain" size={24} color="white" />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5, marginLeft: 25 }, { opacity: relacion === 'profesor' ? 1 : 0.5 }]} onPress={() => alternarRelacion('profesor')}>
                                        <Ionicons name="school" size={24} color="white" />
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={[stylesBtns.Ajustes, { margin: 5, marginLeft: 25, width: 30, height: 30 }]} onPress={() => mostrarAlerta()}>
                                    <Ionicons name="information-circle" size={24} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={stylesBtns.BotonJugar}>
                            <TouchableOpacity style={[stylesBtns.styleBoton, { marginTop: 0, borderColor: 'darkgreen' }]} onPress={() => guardar()}>
                                <Text style={stylesBtns.buttonText}>Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>  
                </ImageBackground>
            </ScrollView>
        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    containerAll: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    stylesTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    textoTitle: {
        color: '#52A900',
        fontSize: 50,
        fontFamily: 'MTFBirthdayBash',
        justifyContent: 'center',
    },
    containerForm: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    form: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8,
        backgroundColor: '#88AE89',
        borderRadius: 50,
        marginBottom: 20,
    },
    formRelacion: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#88AE89',
        borderRadius: 50,
    },
    containerformRelacion: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        width: 350,
        marginTop: 20,
    },
    textoNegrita: {
        color: '#00000',
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        width: '65%',
        height: 50,
        borderColor: '#88AE89',
        backgroundColor: '#CBE8B6',
        borderRadius: 25,
        fontSize: 15,
        fontFamily: 'roboto',
        color: 'green',
        marginRight: 15,
        paddingLeft: 10,
    },
    claveInput: {
        display: 'flex',
        width: '65%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 25,
        marginRight: 15,
        backgroundColor: '#CBE8B6',
    },
});
