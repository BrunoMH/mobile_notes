import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Pressable, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React, { useState, useEffect } from 'react';
import styles from './styles';

export default function Home({ navigation, notes }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredNotes(notes);
    } else {
      const lowerQuery = searchQuery.toLowerCase();
      const results = notes.filter(
        (note) =>
          (note.title && note.title.toLowerCase().includes(lowerQuery)) ||
          (note.content && note.content.toLowerCase().includes(lowerQuery))
      );
      setFilteredNotes(results);
    }
  }, [searchQuery, notes]);

  const createNew = () => {
    navigation.navigate('Note');
  };

  const renderNote = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('Note', { note: item })}>
      <View style={styles.noteCard}>
        <Text style={styles.cardTitle}>{item.title || 'Untitled'}</Text>
        <Text style={styles.cardSnippet}>
          {item.content ? item.content.slice(0, 40) + '...' : ''}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>notes</Text>
      </View>

      <View style={styles.placeholder}>
        <Ionicons name="search" size={20} color="#000" style={styles.icon} />
        <TextInput
          style={styles.inputText}
          placeholder="Search notes..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredNotes}
        renderItem={renderNote}
        keyExtractor={(item, index) => index.toString()}
        style={{ marginTop: 20 }}
      />

      <View style={styles.addButton}>
        <Pressable style={styles.createNote} onPress={createNew}>
          <Ionicons name="add" size={50} color="#000" />
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
