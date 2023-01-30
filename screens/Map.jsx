import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import IconButton from "../components/ui/IconButton";

export default function Map({route}) {
  const initialLocation = route.params && {
    lat: route.params.initialLat,
    lng: route.params.initialLng,
  };
  const navigation = useNavigation(initialLocation)
  const [marker,setMarker] = useState(initialLocation)
  const region = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  useEffect(() => {
    if(initialLocation && !route.params.newPlace) {
      return
    }
     if(marker) {
    navigation.setOptions({
      headerRight : ({tintColor}) => {
        return <IconButton icon={'save'} size={24} color={tintColor} onPress={savePickedLocation}/>
      }
    })
   }
  },[marker,initialLocation ])
  const selectedLocationVerify = (event) => {
    if(initialLocation && !route.params.newPlace) {
      return
    }
    const lat = event.nativeEvent.coordinate.latitude;
    const lng = event.nativeEvent.coordinate.longitude;
    setMarker({
      lat,
      lng
    })
  }

  const savePickedLocation = () => {

    navigation.navigate('AddPlace', {
      marker
    })
  }
  return (
    <View style={s.container}>
      <MapView style={s.map} initialRegion={region} onPress={selectedLocationVerify} >
        {marker && (
          <Marker stopPropagation title="Picked Location" coordinate={{
            latitude : marker.lat,
            longitude : marker.lng
          }}/>
        )}
      </MapView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
