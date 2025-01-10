import { StyleSheet } from 'react-native';

export const stylesFull = StyleSheet.create({
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover',
    },
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
});