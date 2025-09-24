import { StyleSheet, Text, View } from 'react-native';

export default function Note() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the Note page ✍️</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
  },
});
