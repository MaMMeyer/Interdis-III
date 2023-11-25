import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native';
// import { Camera } from 'expo-camera';
import { Camera, CameraType } from 'expo-camera';


import { WebView } from 'react-native-webview';

export default function App() {
  // const [type, setType] = useState(Camera.Constants.Type.back);
  // const [permission, setPermission] = useState(null);

  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.useCameraPermissions();
      requestPermission(status);
    })();
  }, []);

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  if (permission === null) {
    return <View />;
  }
  if (permission === 'denied') {
    return <Text>No access to camera</Text>;
  }

  return (

    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Text style={styles.text}>Flip</Text>
            <Text style={styles.text}>Camera</Text>
          </TouchableOpacity>
        </View>
      </Camera>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,

  },
  button: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    // flex: 0.1,
    width: 100,
    height: 100,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});
