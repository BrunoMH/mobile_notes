import React, { useState } from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Note({ navigation, route, setNotes }) {
  const existingNote = route.params?.note;
  const [title, setTitle] = useState(existingNote?.title || '');
  const [content, setContent] = useState('');

  const goBack = () => {
    const now = new Date();
    const dateString = now.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const newNote = {
      title: title.split(' ')[0] || 'Untitled',
      content,
      date: existingNote?.date || `${dateString} | ${timeString}`,
    };

    setNotes(prev => {
      if (existingNote) {
        return prev.map(n => (n.date === existingNote.date ? newNote : n));
      }
      return [newNote, ...prev];
    });

    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.noteHeader}>
        <Pressable onPress={goBack}>
          <Ionicons name="arrow-back" size={30} color="#fff" style={styles.icon} />
        </Pressable>
        <TextInput
          style={styles.noteTitleInput}
          placeholder="New note"
          placeholderTextColor="#aaa"
          value={title}
          onChangeText={setTitle}
        />
      </View>

      <View style={styles.noteContainer}>
        <Text style={styles.noteDate}>
          {new Date().toLocaleDateString()} | {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>

        <TextInput
          style={styles.noteInput}
          placeholder="Write your note here..."
          placeholderTextColor="#555"
          multiline
          value={content}
          onChangeText={setContent}
          textAlignVertical="top"
        />
      </View>

    </View >
  );
}
