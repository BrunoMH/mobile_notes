import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Note from './Note';

const Stack = createNativeStackNavigator();

export default function App() {
  const [notes, setNotes] = useState([]);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <Home {...props} notes={notes} />}
        </Stack.Screen>
        <Stack.Screen name="Note">
          {(props) => <Note {...props} setNotes={setNotes} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
