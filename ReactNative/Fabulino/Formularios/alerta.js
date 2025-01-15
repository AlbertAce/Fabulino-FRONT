// alerta.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

const Alerta = ({ visible, onClose, title, message }) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>{'Relacion con el niño'}</Text>
          <View style={styles.mensaje}>
            <Ionicons name="people" size={24} color="black" style={[{ marginRight: 25 }]} />
            <Text style={styles.modalMessage}>{message = "Padre/Madre/\nTutor Legal"}</Text>
          </View>
          <View style={styles.mensaje}>
            <FontAwesome5 name="brain" size={24} color="black" style={[{ marginRight: 25 }]} />
            <Text style={styles.modalMessage}>{message = "Psicólogo"}</Text>
          </View>
          <View style={styles.mensaje}>
            <Ionicons name="school" size={24} color="black" style={[{ marginRight: 25 }]} />
            <Text style={styles.modalMessage}>{message = "Profesor"}</Text>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>Cerrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#52A900',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#52A900',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  mensaje: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25
  }
});

export default Alerta;
