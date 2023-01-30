import { FlatList, StyleSheet, Text, View } from "react-native";
import PlaceItem from "./PlaceItem";
import { Colors } from './../../constants/colors';
import { useNavigation } from '@react-navigation/native';

export default function PlacesList({ places }) {
  const navigation = useNavigation()
  const pressHandler = (place) => {
    navigation.navigate('PlaceDetail', {
      place
    })
  }
  if (!places || !places.length) {
    return (
      <View style={s.fallbackContainer}>
        <Text style={s.fallbackText}>No places added yet - start adding some!</Text>
      </View>
    );
  }
  return (
    <FlatList
     style={s.list}
      data={places}
      keyExtractor={(i) => i.id}
      renderItem={({ item }) => <PlaceItem onPress={() => pressHandler(item)} item={item} />}
    />
  );
}


const s = StyleSheet.create({
    list : {
      margin : 24
    },
    fallbackContainer : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',

    },
    fallbackText : {
        fontSize : 16,
        color : Colors.primary200,

    }
})