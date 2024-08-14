import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

// 將本地圖片導入
const photos = {
  '1': require('./assets/photo1.png'),
  '2': require('./assets/photo2.png'),
  '3': require('./assets/photo3.png'),
};

export default function App() {
  const [contacts, setContacts] = useState([
    { id: '1', name: '張三', address: '台北市中山區中山北路1號', phone: '0912345678', photo: photos['1'] },
    { id: '2', name: '李四', address: '台中市西區民生路2號', phone: '0923456789', photo: photos['2'] },
    { id: '3', name: '王五', address: '高雄市前金區中正路3號', phone: '0934567890', photo: photos['3'] },
  ]);

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Image source={item.photo} style={styles.contactPhoto} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactAddress}>{item.address}</Text>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>聯絡人</Text>
      <FlatList
        data={contacts}
        renderItem={renderContactItem}
        keyExtractor={item => item.id}
      />
    </View>
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
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  contactPhoto: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
});
