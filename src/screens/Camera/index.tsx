import { Camera, CameraCapturedPicture, CameraType, FaceDetectionResult } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert } from 'react-native';
import { ComponentButtoninterface } from '../../components';
import { styles } from './styles';
import * as MediaLibary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker';
import * as FaceDetector from 'expo-face-detector';
import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';
import { LoginTypes } from '../../navigations/login.navigation';

interface IPhoto {
  height: string,
  uri: string,
  widht: string,


}
export function CameraScreen({ navigation }: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermission] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)
  const [permissionQrCode, requestPermissionQrCode] = BarCodeScanner.usePermissions();
  const [scanned, setScanned] = useState(false);
  const [face, setFace] = useState<FaceDetector.FaceFeature>()

  if (!permissionCamera || !permissionMedia || !permissionQrCode) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionCamera.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera!</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  } if (!permissionMedia) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permissionMedia.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the Media </Text>
        <Button onPress={requestPermissionMedia} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  async function takePicture() {
    if (ref.current) {
      const picture = await ref.current.takePictureAsync()
      setPhoto(picture)
      setTakePhoto(false)
    }
  }

  async function savePhoto() {
    const asset = await MediaLibary.createAssetAsync(photo!.uri)
    MediaLibary.createAlbumAsync("Image", asset, false)
    Alert.alert("IMagem salva com sucesso!")

  }
  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1

    })
    if (!result.canceled) {
      setPhoto(result.assets[0])
    }

  }
  const handleBarCodeScanned = ({ type, data }: BarCodeScannerResult) => {
    setScanned(true);
    alert(data);
  };
  const handleFacesDetected = ({ faces }: FaceDetectionResult): void => {
    if (faces.length > 0) {
      const faceDetect = faces[0] as FaceDetector.FaceFeature
      setFace(faceDetect)
    } else {
      setFace(undefined)
    }
  };
  return (
    <View style={styles.container}>
      {takePhoto ? (
        <>
          <ComponentButtoninterface title='Flip' type='secondary' onPressI={toggleCameraType} />

          <Camera style={styles.camera} type={type} ref={ref}
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            onFacesDetected={handleFacesDetected}
            faceDetectorSettings={{
              mode: FaceDetector.FaceDetectorMode.accurate,
              detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
              runClassifications: FaceDetector.FaceDetectorClassifications.all,
              minDetectionInterval: 100,
              tracking: true,
            }}
          />
          <ComponentButtoninterface title='Tirar Foto' type='secondary' onPressI={takePicture} />
          <ComponentButtoninterface title='CLIQUE PARA SCANEAR NOVAMENTE ' type='secondary' onPressI={() => setScanned(false)} />
          <ComponentButtoninterface title='Salvar imagem' type='secondary' onPressI={savePhoto} />
          <View style={styles.sorrisinho} >
            {face && face.smilingProbability && face.smilingProbability > 0.1 ? (
              <Text style={styles.textinho}>Que lindo sorriso!</Text>
            ) : (
              <Text style={styles.textinho}>Porque não está sorrindo?</Text>
            )}
          </View>
        </>
      ) : (
        <>
          <ComponentButtoninterface title='Abrir imagem' type='primary' onPressI={pickImage} />
          <ComponentButtoninterface title='Salvar imagem' type='secondary' onPressI={savePhoto} />
          <ComponentButtoninterface title='Tirar Foto' type='secondary' onPressI={() => setTakePhoto(true)} />
          {photo && photo.uri && (
            <Image source={{ uri: photo.uri }} style={styles.img} />
          )}
        </>
      )}
    </View>
  )
}

