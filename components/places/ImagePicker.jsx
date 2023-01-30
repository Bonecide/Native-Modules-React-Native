import { Alert, Image, StyleSheet, Text, View } from "react-native";
import * as Camera from "expo-image-picker";
import { useState } from "react";
import { Colors } from '../../constants/colors';
import OutlineButton from "../ui/OutlineButtom";
import AnimatedButton from './../ui/AnimatedButton';
export default function ImagePicker({onImageTaken}) {
    
  const [cameraPermissonStatus, requestPermisson] = Camera.useCameraPermissions();
  const [pickedImage,setPickedImage] = useState()


  const verifyPermissions = async () => {
    if (cameraPermissonStatus.status === Camera.PermissionStatus.UNDETERMINED || Camera.PermissionStatus.DENIED ) {
      const response = await requestPermisson();

      return response.granted;
    }

    if (cameraPermissonStatus.status === Camera.PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grand camera permissions to use this app"
      );
      return false;
    }

    return true;
  };
  const takeImageHandler = async () => {

    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
        return
    }
    else {
        const image = await Camera.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5,
          });
          setPickedImage(image.assets[0].uri)
          onImageTaken(image.assets[0].uri)
    }
  };
  return (
    <View>
      <View style={s.imagePreview}>
        {pickedImage ? (
          <Image style={s.image} resizeMode='cover'  source={{uri : pickedImage }}/>
        ) : (
          <Text>No image picked yet</Text>
        )}
      </View>
    <OutlineButton icon={'camera'} onPress={takeImageHandler}>Take Photo</OutlineButton>
    </View>
  );
}
  const s = StyleSheet.create({
    imagePreview : {
      width : '100%',
      height : 250,
      marginVertical : 8,
      justifyContent : 'center',
      alignItems : 'center',
      backgroundColor : Colors.primary100,
      borderRadius : 4,
      overflow : "hidden",
    },
    image : {
      width : '100%',
      height : '100%',

    }
  })
