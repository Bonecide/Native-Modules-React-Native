import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
export default function IconButton({icon,size,color,onPress}) {

    return(
        <Pressable style={({pressed}) => pressed? [s.button,s.pressed ] : s.button} onPress={onPress}>
            <Ionicons size={size} color={color} name={icon}/>
        </Pressable>
    )
}

const s = StyleSheet.create({


    button : {
        padding : 8,
        

    },
    pressed : {     
        opacity : 0.7,
    }
})