import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";

export default function App() {
  const [contacts, setContacts] = useState([
    { id: "1", name: "張三", phone: "0912345678" },
    { id: "2", name: "李四", phone: "0923456789" },
    { id: "3", name: "王五", phone: "0934567890" },
    { id: "4", name: "陳八", phone: "0937878787" },
    { id: "5", name: "張三", phone: "0912345678" },
    { id: "6", name: "李四", phone: "0923456789" },
    { id: "7", name: "王五", phone: "0934567890" },
    { id: "8", name: "陳八", phone: "0937878787" },
    { id: "9", name: "張三", phone: "0912345678" },
    { id: "10", name: "李四", phone: "0923456789" },
    { id: "11", name: "王五", phone: "0934567890" },
    { id: "12", name: "陳八", phone: "0937878787" },
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
        keyExtractor={(item) => item.id}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  contactItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  contactName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  contactPhone: {
    fontSize: 16,
    color: "#666",
  },
});
