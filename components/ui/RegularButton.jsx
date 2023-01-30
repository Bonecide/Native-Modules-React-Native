import { Pressable, StyleSheet, Text } from "react-native";
import { Colors } from "./../../constants/colors";

export default function RegularButton({ onPress, children }) {
  return (
    <Pressable
      style={({ pressed }) => [s.button, pressed && s.pressed]}
      onPress={onPress}
    >
      <Text style={s.text}>{children}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    borderRadius: 4,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: Colors.primary50,
  },
  pressed: {
    opacity: 0.7,
  },
});
