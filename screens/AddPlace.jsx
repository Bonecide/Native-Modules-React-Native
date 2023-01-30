import { View } from "react-native";
import PlaceForm from "../components/places/PlaceForm";
import { insertPlace } from "../util/database";

export default function AddPlace({navigation}) {

  const createPlaceHandler = async (place) => {
    await insertPlace(place)
    navigation.navigate('AllPlaces', {
      place
    })
  }
  return <PlaceForm onPlaceCreate={createPlaceHandler}/>;
}
