import { Platform } from 'react-native';
import { registerRootComponent } from 'expo';
import App from './App';

if (Platform.OS === 'web') {
  const { AppRegistry } = require('react-native');
  AppRegistry.registerComponent('main', () => App);
  AppRegistry.runApplication('main', {
    rootTag: document.getElementById('root'),
  });
} else {
  registerRootComponent(App);
}