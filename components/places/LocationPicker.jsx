import { useNavigation, useRoute } from "@react-navigation/native";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from "expo-location";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { getAddress, getMapPreview } from "../../util/location";
import LoadingOverlay from "../ui/LoadingOverlay";
import OutlineButton from "../ui/OutlineButtom";
import { Colors } from "./../../constants/colors";

export default function LocationPicker({ onLocationTaken }) {
  const route = useRoute();
  const [isLocationLoading, setIsLocationLoading] = useState(false);
  const [location, setLocation] = useState();
  const [locationPermissionInformation, requestPermisson] =
    useForegroundPermissions();
  const navigation = useNavigation();
  const verifyPrmissions = async () => {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED ||
      PermissionStatus.DENIED
    ) {
      const response = await requestPermisson();

      return response.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grand camera permissions to use this app"
      );
      return false;
    }

    return true;
  };
  useEffect(() => {
    if (route.params?.marker) {
      setLocation(route.params.marker);
      console.log(location);
    }
  }, [route]);
  useEffect(() => {
    const setLocation = async () => {
      if (location) {
        const address = await getAddress(location.lat, location.lng);
        onLocationTaken({
          ...location,
          address: address,
        });
      }
    };
    setLocation();
  }, [location]);
  const getLocationHandler = async () => {
    setIsLocationLoading(true);
    const hasPerm = verifyPrmissions();
    if (!hasPerm) {
      return;
    }
    const Curlocation = await getCurrentPositionAsync();
    setLocation({
      lat: Curlocation.coords.latitude,
      lng: Curlocation.coords.longitude,
    });
    setIsLocationLoading(false);
  };
  const pickOnMap = async () => {
    setIsLocationLoading(true);
    const hasPerm = verifyPrmissions();
    if (!hasPerm) {
      return;
    }
    const Curlocation = await getCurrentPositionAsync();
    setIsLocationLoading(false);
    navigation.navigate("Map", {
      initialLat : Curlocation.coords.latitude,
      initialLng : Curlocation.coords.longitude,
      newPlace : true
    });
  };
  return (
    <View>
      <View style={s.mapPreview}>
        {isLocationLoading ? (
          <LoadingOverlay />
        ) : location ? (
          <Image
            style={s.image}
            resizeMode="cover"
            source={{ uri: getMapPreview(location.lat, location.lng) }}
          />
        ) : (
          <Text>You dont choose any location! Try Now!</Text>
        )}
      </View>

      <View style={s.actions}>
        <OutlineButton icon={"location"} onPress={getLocationHandler}>
          Locate User
        </OutlineButton>
        <OutlineButton icon={"map"} onPress={pickOnMap}>
          Pick On Map
        </OutlineButton>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 250,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
