import { useEffect } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../components/ui/OutlineButtom";
import { Colors } from "./../constants/colors";

export default function PlaceDetail({ navigation, route }) {
  const selectedPlace = route.params.place;
  console.log(selectedPlace);
  const showOnMapHandler = () => {
    navigation.navigate("Map", {
      initialLat: selectedPlace.lat,
      initialLng: selectedPlace.lng,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      title: selectedPlace.title,
    });
  }, []);
  return (
    <ScrollView>
      <Image source={{ uri: selectedPlace.imageUri }} style={s.image} />
      <View style={s.locationContainer}>
        <View style={s.addressContainer}>
          <Text style={s.address}>{selectedPlace.address}</Text>
        </View>
        <OutlineButton icon={"map"} onPress={showOnMapHandler}>
          View On Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  image: {
    height: "35%",
    minHeight: 300,
    width: "100%",
  },
  locationContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  addressContainer: {
    padding: 20,
  },
  address: {
    color: Colors.primary500,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
