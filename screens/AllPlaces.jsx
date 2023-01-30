import { useEffect, useState } from "react";
import { View } from "react-native";
import PlacesList from "../components/places/PlacesList";
import { fetchPlaces } from './../util/database';

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadedPlaces] = useState([]);
  useEffect(() => {
    fetchPlaces().then((res) => {
      setLoadedPlaces(res.rows._array)
    })
  }, [route]);
  return <PlacesList places={loadedPlaces} />;
}
