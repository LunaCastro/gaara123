import { Camera, CameraCapturedPicture, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Alert} from 'react-native';
import { ComponentButtoninterface } from '../../components';
import { styles } from './styles';
import * as MediaLibary from 'expo-media-library';
import * as ImagePicker from 'expo-image-picker'
import { LoginTypes } from '../../navigations/login.navigation';

interface IPhoto{
  height:string,
  uri :string,
  widht :string,
  
  
}
export function CameraScreen({navigation}: LoginTypes) {
  const [type, setType] = useState(CameraType.back);
  const [permissionCamera, requestPermission] = Camera.useCameraPermissions();
  const [permissionMedia, requestPermissionMedia] = MediaLibary.usePermissions();
  const [photo, setPhoto] = useState<CameraCapturedPicture | ImagePicker.ImagePickerAsset>()
  const ref = useRef<Camera>(null)
  const [takePhoto, setTakePhoto] = useState(false)

  if (!permissionCamera) {
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
  }if (!permissionMedia) {
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
    if(ref.current){
      const picture = await ref.current.takePictureAsync()
      setPhoto(picture)
      setTakePhoto(false)
    }
  }

async function savePhoto(){
  const asset = await MediaLibary.createAssetAsync(photo!.uri)
  MediaLibary.createAlbumAsync("Image", asset, false)
  Alert.alert("IMagem salva com sucesso!")

}
async function pickImage() {
  const result = await ImagePicker.launchImageLibraryAsync({
    allowsEditing: true,
    aspect: [4,3],
    quality: 1

  })
  if (!result.canceled) {
    setPhoto(result.assets[0])
  }
  
}

  return (
    <View style={styles.container}>
      {takePhoto?(
        <>
              <ComponentButtoninterface title='Tirar Foto' type='secondary' onPressI={takePicture} />
          <Camera style={styles.camera} type={type}/>
      <ComponentButtoninterface title='Abrir imagem' type='primary' onPressI={pickImage} />
     <ComponentButtoninterface title='Salvar imagem' type='secondary' onPressI={savePhoto} />
      </>
      ):(
        <>
       <ComponentButtoninterface title='Abrir imagem' type='primary' onPressI={pickImage} />
      <ComponentButtoninterface title='Tirar Foto' type='secondary' onPressI={() => setTakePhoto(true)} />
      {photo && photo.uri && (
                <Image source={{uri: photo.uri}} style={styles.img}/>
                )}
      </>
      )}
    </View>
)}

