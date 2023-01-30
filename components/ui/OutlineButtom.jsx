import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import { Colors } from './../../constants/colors';

export default function OutlineButton({onPress,icon,children}) {

    return(
        <Pressable style={({pressed}) => [s.button, pressed && s.pressed ]} onPress={onPress}>
            <Ionicons style={s.icon} name={icon} size={18} color={Colors.primary500}/>
            <Text style={s.text}>{children}</Text>
        </Pressable>
    )
}

const s = StyleSheet.create({
    button : {
        paddingHorizontal : 12,
        paddingVertical : 6,
        margin : 4,
        justifyContent : 'center',
        alignItems : 'center',
        borderWidth : 1,
        borderColor : Colors.primary500,
        flexDirection : 'row'
    },
    pressed : {
        opacity: 0.7
    },
    icon : {
        marginRight : 6,
    },
    text : {
        color : Colors.primary500,

    }
})

