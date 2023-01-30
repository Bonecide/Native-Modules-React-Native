import React, { useState } from 'react';
import { Animated, Pressable, StyleSheet, Text } from 'react-native';

const AnimatedButton = () => {
  const [scale, setScale] = useState(new Animated.Value(1));

  const startAnimation = () => {
    Animated.timing(scale, {
      toValue: 0.8,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const endAnimation = () => {
    Animated.timing(scale,{
        toValue : 1,
        duration : 500,
        useNativeDriver: true
    }).start()
  }

  return (
    <Pressable onPressIn={startAnimation} onPressOut={endAnimation}  style={styles.pressable}>
        
      <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
        <Text style={styles.text}>Press me</Text>
      </Animated.View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  pressable: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'blue',
    borderRadius: 4,
    padding: 12,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default AnimatedButton;
