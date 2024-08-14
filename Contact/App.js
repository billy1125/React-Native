import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, Linking, TextInput, Modal, Button } from 'react-native';

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

  const [modalVisible, setModalVisible] = useState(false);
  const [currentContact, setCurrentContact] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const openMap = (address) => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };

  const addContact = () => {
    setIsEditing(false);
    setCurrentContact({ id: Date.now().toString(), name: '', address: '', phone: '', photo: '' });
    setModalVisible(true);
  };

  const editContact = (contact) => {
    setIsEditing(true);
    setCurrentContact(contact);
    setModalVisible(true);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const saveContact = () => {
    if (isEditing) {
      setContacts(contacts.map(c => c.id === currentContact.id ? currentContact : c));
    } else {
      setContacts([...contacts, currentContact]);
    }
    setModalVisible(false);
  };

  const renderContactItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <Image source={item.photo} style={styles.contactPhoto} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <TouchableOpacity onPress={() => openMap(item.address)}>
          <Text style={styles.contactAddress}>{item.address}</Text>
        </TouchableOpacity>
        <Text style={styles.contactPhone}>{item.phone}</Text>
      </View>
      <View style={styles.contactActions}>
        <TouchableOpacity onPress={() => editContact(item)}>
          <Text style={styles.actionText}>編輯</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteContact(item.id)}>
          <Text style={[styles.actionText, styles.deleteText]}>刪除</Text>
        </TouchableOpacity>
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
      <TouchableOpacity style={styles.addButton} onPress={addContact}>
        <Text style={styles.addButtonText}>新增聯絡人</Text>
      </TouchableOpacity>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="姓名"
            value={currentContact.name}
            onChangeText={(text) => setCurrentContact({...currentContact, name: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="地址"
            value={currentContact.address}
            onChangeText={(text) => setCurrentContact({...currentContact, address: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="電話"
            value={currentContact.phone}
            onChangeText={(text) => setCurrentContact({...currentContact, phone: text})}
          />
          <TextInput
            style={styles.input}
            placeholder="照片 URL"
            value={currentContact.photo}
            onChangeText={(text) => setCurrentContact({...currentContact, photo: text})}
          />
          <Button title="儲存" onPress={saveContact} />
          <Button title="取消" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
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
    color: 'blue',
    textDecorationLine: 'underline',
    marginTop: 2,
  },
  contactPhone: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  contactActions: {
    justifyContent: 'space-around',
  },
  actionText: {
    color: 'blue',
    marginBottom: 5,
  },
  deleteText: {
    color: 'red',
  },
  addButton: {
    backgroundColor: 'blue',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '100%',
  },
});