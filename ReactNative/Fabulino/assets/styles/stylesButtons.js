import { StyleSheet } from 'react-native';

export const stylesBtns = StyleSheet.create({
    styleBoton: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 56,
        width: 164,
        borderColor: 'black',
        color: '#222828',
        backgroundColor: '#52A900',
        marginTop: 60,
        borderWidth: 3,
        borderRadius: 20,
    },
    buttonText: {
        color: '#DDF7C4',
        fontSize: 24,
        fontFamily: 'MTFBirthdayBash',
    },
    BotonJugar: {
        flex: 1,
        display: 'grid',
        justifyContent: 'start',
        alignItems: 'center',
        marginTop: 50,
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
    },
    botonInferior: {
        margin:10,
        marginTop:40,
        width:150,
        bottom: 20,
        backgroundColor: '#52A900',
        borderWidth: 3,
        borderColor: 'darkgreen',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    textoBoton: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    botonRedondo: {
        width: 80,
        height: 80,
        backgroundColor: '#DDF7C4',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 100,
        margin:5,
    },

});