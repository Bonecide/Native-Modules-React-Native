import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from './../../constants/colors';

export default function PlaceItem({ item, onPress }) {
  return (
    <Pressable style={({pressed}) => [s.item, pressed && s.pressed]} onPress={onPress}>
      <Image style={s.image} source={{ uri: item.imageUri }} />
      <View style={s.info}>
        <Text style={s.title}>{item.title}</Text>
        <Text style={s.address}>{item.address}</Text>
      </View>
    </Pressable>
  );
}

const s = StyleSheet.create({
    item : {
        flexDirection : 'row',
        alignItems : 'flex-start',
        borderRadius : 6,
        marginVertical : 12,
        backgroundColor : Colors.primary500,
        elevation : 2,
        shadowColor: "black",
        shadowRadius: 2,
        shadowOpacity: 0.15,
        shadowOffset: { width: 1, height: 1 }
    },
    pressed : {
        opacity : 0.9,

    },
    image : {
        flex : 1,
        borderBottomLeftRadius : 4,
        borderTopLeftRadius : 4,
        height : 100,


    },
    info : {
        flex : 2,
        padding : 12,

    },
    title : {
        fontWeight : 'bold',
        fontSize : 18,
        color : Colors.gray700
    },
    address : {
        fontSize : 18,
        color : Colors.gray700
    }
});
