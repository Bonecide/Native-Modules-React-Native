import { ActivityIndicator, StyleSheet, View } from 'react-native';

function LoadingOverlay() {
  return (
    <View style={styles.rootContainer}>
      <ActivityIndicator size="large" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  }
});
