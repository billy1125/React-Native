import React, { useState } from 'react';
import { StatusBar } from "expo-status-bar";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: '張三', phone: '0912345678' },
    { id: '2', name: '李四', phone: '0923456789' },
    { id: '3', name: '王五', phone: '0934567890' },
    { id: '1', name: '張三', phone: '0912345678' },
    { id: '2', name: '李四', phone: '0923456789' },
    { id: '3', name: '王五', phone: '0934567890' },
    { id: '1', name: '張三', phone: '0912345678' },
    { id: '2', name: '李四', phone: '0923456789' },
    { id: '3', name: '王五', phone: '0934567890' },
    { id: '1', name: '張三', phone: '0912345678' },
    { id: '2', name: '李四', phone: '0923456789' },
    { id: '3', name: '王五', phone: '0934567890' },
  ]);

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>聯絡人</Text>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={item => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contactItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactPhone: {
    fontSize: 16,
    color: '#666',
  },
});