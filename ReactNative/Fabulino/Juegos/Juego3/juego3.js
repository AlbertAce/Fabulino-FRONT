import { Platform, BackHandler, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Camera, useCameraPermissions, CameraView } from 'expo-camera';
import * as MediaLibrary from 'expo-media-library';
import * as NavigationBar from 'expo-navigation-bar';
import { Entypo } from '@expo/vector-icons';

export function Juego3Screen() {
  const [hasCameraPermission, setHasCameraPermission] = useCameraPermissions();
  const [cameraFace, setCameraFace] = useState('back');
  const [cameraFlash, setCameraFlash] = useState('off');

  const [hasMediaPermission, sethasMediaPermission] = MediaLibrary.usePermissions();
  const [image, setImage] = useState(null);

  const cameraRef = useRef(null);

  if (Platform.OS === 'android') {
    NavigationBar.setVisibilityAsync("hidden");
  }

  useEffect(() => {
    (async () => {
      let media = hasMediaPermission;
      let camera = hasCameraPermission;

      if (media.status !== 'granted') {
        const libraryStatus = await MediaLibrary.requestPermissionsAsync();

        if (libraryStatus === 'granted') {
          sethasMediaPermission(true);
        } else {
          BackHandler.exitApp();
        }
      }

      if (camera.status !== 'granted') {
        const cameraStatus = await Camera.requestCameraPermissionsAsync();

        if (cameraStatus === 'granted') {
          setHasCameraPermission(true);
        } else {
          BackHandler.exitApp();
        }
      }
    })();
  }, []);

  const sacarFoto = async () => {
    if (cameraRef && cameraRef.current) {
      try {
        const foto = await cameraRef.current.takePictureAsync();
        setImage(foto.uri);
      } catch (err) {
        console.log('Error: '.err);
      }
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {!image ? (
        <CameraView
          style={styles.camara}
          facing={cameraFace}
          flash={cameraFlash}
          ref={cameraRef}
        >
          <View style={styles.botonesFunciones}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { setCameraFace(cameraFace === 'back' ? 'front' : 'back') }} style={[styles.boton, { marginTop: 3 }]}>
              <Entypo name="retweet" size={28} color={"#ffffff"} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} onPress={() => { setCameraFlash(cameraFlash === 'off' ? 'on' : 'off') }} style={styles.boton}>
              <Entypo name={cameraFlash === 'off' ? 'light-down' : 'light-up'} size={28} color={"#ffffff"} />
            </TouchableOpacity>
          </View>
          <View style={styles.botonSacarFoto}>
            <TouchableOpacity onPress={sacarFoto} activeOpacity={0.8} style={[styles.boton, styles.botonFondo, styles.botonConTexto]}>
              <Entypo name="camera" size={28} color={"#000000"} />
              <Text style={[styles.botonTexto, styles.botonFondoTexto]}>Sacar Foto</Text>
            </TouchableOpacity>
          </View>
        </CameraView>
      ) : (
        <Image source={{ uri: image }} style={styles.camara} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000'
  },
  camara: {
    position: 'relative',
    flex: 1
  },
  boton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  botonConTexto: {
    paddingHorizontal: 20,
  },
  botonTexto: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ffffff',
    marginLeft: 10
  },
  botonFondo: {
    backgroundColor: '#ffffff',
    borderRadius: 10
  },
  botonFondoTexto: {
    color: '#000000'
  },
  botonSacarFoto: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    marginBottom: 20
  },
  botonesFunciones: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    columnGap: 20,
    paddingTop: 40,
    paddingHorizontal: 30
  }
});