import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>notes</Text>
      </View>

      <View style={styles.placeholder}>
        <Ionicons name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder='Placeholder...'
          onChangeText={(text) => console.log(text)}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  header: {
    marginTop: 50,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 15,
  },
  placeholder: {
    width: 320,
    height: 50,
    backgroundColor: '#E0BB00',
    borderColor: '#69665b',
    borderWidth: 2,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  inputText: {
    flex: 1,
    width: '100%'
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});
