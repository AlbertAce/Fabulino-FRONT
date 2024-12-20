import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { useNavigation } from '@react-navigation/native';


export function TablaScreen({ route }) {
    const [duplaLista, setDuplaLista] = useState([]);
    const [indiceSelecionado, setIndiceSeleccionado]=useState(0.0);
    const navigation = useNavigation();
    const { datosEnviados } = route.params;
    const lista = datosEnviados.listaResultados;
    const [registroSoplar, setRegistroSoplar] = useState(0.0);


    const mandarResultadosR = () => {
        setRegistroSoplar (lista[indiceSelecionado]);
        const datos = {
            resgistroSoplar: registroSoplar,
        }
        navigation.navigate('resultado', { datosEnviados: datos })
        
    }

    useEffect(() => {
        const nuevaLista = lista.map((valor, index) => ['Prueba' + (index+1), valor]);
        setDuplaLista(nuevaLista);
    }, [lista]);

    const tableData = {
        tableHead: ['Prueba', 'Valor'],
        tableData: duplaLista
    };

    return (
        
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 4, borderColor: 'teal' }}>
                <Row data={tableData.tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={tableData.tableData} textStyle={styles.text} />
            </Table>
            <TextInput onChangeText={setIndiceSeleccionado} value={indiceSelecionado} style={styles.styleTextImput}></TextInput>
            <TouchableOpacity onPress={mandarResultadosR} style={styles.styleBoton}>
                <Text style={{ textAlign: 'center', }}>Enviar

                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    head: {
        height: 44,
        backgroundColor: '#D5DCA6'
    },
    headText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    text: {
        margin: 6,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
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