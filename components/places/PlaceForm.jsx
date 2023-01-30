import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import ImagePicker from "./ImagePicker";
import { Colors } from './../../constants/colors';
import LocationPicker from "./LocationPicker";
import RegularButton from "../ui/RegularButton";
import { Place } from "../../models/place";

export default function PlaceForm({onPlaceCreate}) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [image,setImage] = useState()
  const [location,setLocation] = useState()
  const takeImageHandler = (image) => {
    setImage(image)
  }
  const pickLocationHandler = (location) => {
    setLocation(location)
  }
  const savePlaceHandler = () => {
    const placeData = new Place(enteredTitle, image, location)
    onPlaceCreate(placeData)
  }
  
  return (
    <ScrollView style={s.form}>
      <View>
        <Text style={s.labels}>Title</Text>
        <TextInput
          style={s.input}
          onChangeText={(enteredText) => setEnteredTitle(enteredText)}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onImageTaken = {takeImageHandler}/>
      <LocationPicker onLocationTaken= {pickLocationHandler}/>
      <RegularButton onPress={savePlaceHandler}>Add Place</RegularButton>
    </ScrollView>
  );
}


const s = StyleSheet.create({
    form : {
      flex : 1,
      padding : 24,

    },
    labels : {
      fontWeight : 'bold',
      marginBottom : 4,
      color : Colors.primary500,
    },
    input : {
      marginVertical : 8,
      paddingHorizontal : 4,
      paddingVertical : 8,
      fontSize : 16,
      borderBottomColor : Colors.primary700,
      borderBottomWidth : 2,
      backgroundColor : Colors.primary100,
    }
})