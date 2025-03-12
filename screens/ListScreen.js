// // import React from "react";
// // import { View, StyleSheet, Text,Button } from "react-native";

// // const ListScreen  = ({navigation}) =>{
// //     return <><Text style={{fontSize:48}}> ListScreen</Text> 

// // <Button title="signup Flow"
// //      onPress={()=>{navigation.navigate('loginFlow')}}
// //      />
// //      <Button title="details"
// //      onPress={()=>{navigation.navigate('ListDetail')}}
// //      />
// //      </>;
// // };

// // const styles = StyleSheet.create({

// // })

// // export default ListScreen;



// import * as React from 'react';
// import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView } from 'react-native';
// const { width, height } = Dimensions.get('screen');
// // import {faker} from 'faker-js/faker'
// const { faker } = require('@faker-js/faker');

// faker.seed(10);
// const DATA = [...Array(30).keys()].map((_, i) => {
//     return {
//       key: faker.string.uuid(),
//       image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement(['women', 'men'])}/${faker.number.int({ max: 60 })}.jpg`,
//       name: faker.person.fullName(),
//       jobTitle: faker.person.jobTitle(),
//       email: faker.internet.email(),
//     };
// });

// const SPACING = 20;
// const AVATAR_SIZE = 70;
// const ITEM_SIZE = AVATAR_SIZE + SPACING * 3

// const ListScreen = () => {

//   const scrollY = React.useRef(new Animated.Value(0)).current;

//     return  <View style={{flex: 1, backgroundColor: '#fff'}}>
//         {/* <StatusBar hidden/> */}
        
//         <Animated.FlatList
//         data={DATA}
//         onScroll={Animated.event(
//           [{nativeEvent: {contentOffset:{y: scrollY}}}],
//           {useNativeDriver: true}
//         )}
//         keyExtractor={item => item.key}
//         contentContainerStyle={{
//           padding: SPACING,
//           paddingTop:StatusBar.currentHeight || 42
//         }}
//         renderItem={({item,index})=>{
//           const inputRange= [
//             -1,
//             0,
//             ITEM_SIZE *   index,
//             ITEM_SIZE * (index + 2)
//           ]
//           const opacityInputRange= [
//             -1,
//             0,
//             ITEM_SIZE *   index,
//             ITEM_SIZE * (index + 2)
//           ]
//           const scale = scrollY.interpolate({
//             inputRange,
//             outputRange:[1,1,1,0]
//           })
//           const opacity = scrollY.interpolate({
//             inputRange:opacityInputRange,
//             outputRange:[1,1,1,0]
//           })
//           return <Animated.View style={{flexDirection:'row',padding:SPACING, marginBottom:SPACING, backgroundColor:'rgba(255,255,255,0.8)', borderRadius:12,
//             shadowColor:"#000",
//               shadowOffset:{
//                 width:0,
//                 height:10,
//               },
//               shadowOpacity:.3,
//               shadowRadius:20,
//               opacity,
//               transform:[{scale}]
              
//           }}>
//             <Image
//              source={{uri: item.image}}
//              style={{width: AVATAR_SIZE,height: AVATAR_SIZE,borderRadius:AVATAR_SIZE,marginRight:SPACING / 2
              
//              } }
//              />
//              <View>
//               <Text style={{fontSize:22, fontWeight:'700'}}>{item.name}</Text>
//               <Text style={{fontSize:18,opacity: .7}}>{item.jobTitle}</Text>
//               <Text style={{fontSize:14, opacity:.8,color:"#0099cc"}}>{item.email}</Text>

//              </View>


//           </Animated.View>
//         }}

//         />
//     </View>
//     }




// import * as React from 'react';
// import {
//   StatusBar,
//   Animated,
//   Text,
//   View,
//   Dimensions,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import { faker } from '@faker-js/faker';

// const { width, height } = Dimensions.get('screen');

// faker.seed(10);
// const DATA = [...Array(30).keys()].map((_, i) => {
//   return {
//     key: faker.string.uuid(),
//     image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement([
//       'women',
//       'men',
//     ])}/${faker.number.int({ max: 60 })}.jpg`,
//     name: faker.person.fullName(),
//     jobTitle: faker.person.jobTitle(),
//     email: faker.internet.email(),
//   };
// });

// const SPACING = 20;
// const AVATAR_SIZE = 70;
// const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

// const ListScreen = ({ navigation }) => {
//   const scrollY = React.useRef(new Animated.Value(0)).current;

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       <Animated.FlatList
//         data={DATA}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: true }
//         )}
//         keyExtractor={(item) => item.key}
//         contentContainerStyle={{
//           padding: SPACING,
//           paddingTop: StatusBar.currentHeight || 42,
//         }}
//         renderItem={({ item, index }) => {
//           const inputRange = [
//             -1,
//             0,
//             ITEM_SIZE * index,
//             ITEM_SIZE * (index + 2),
//           ];
//           const scale = scrollY.interpolate({
//             inputRange,
//             outputRange: [1, 1, 1, 0],
//           });
//           const opacity = scrollY.interpolate({
//             inputRange,
//             outputRange: [1, 1, 1, 0],
//           });

//           return (
//             <TouchableOpacity
//               onPress={() => navigation.navigate('ListDetail', { item })}
//             >
//               <Animated.View
//                 style={{
//                   flexDirection: 'row',
//                   padding: SPACING,
//                   marginBottom: SPACING,
//                   backgroundColor: 'rgba(255,255,255,0.8)',
//                   borderRadius: 12,
//                   shadowColor: '#000',
//                   shadowOffset: {
//                     width: 0,
//                     height: 10,
//                   },
//                   shadowOpacity: 0.3,
//                   shadowRadius: 20,
//                   opacity,
//                   transform: [{ scale }],
//                 }}
//               >
//                 <Image
//                   source={{ uri: item.image }}
//                   style={{
//                     width: AVATAR_SIZE,
//                     height: AVATAR_SIZE,
//                     borderRadius: AVATAR_SIZE,
//                     marginRight: SPACING / 2,
//                   }}
//                 />
//                 <View>
//                   <Text style={{ fontSize: 22, fontWeight: '700' }}>
//                     {item.name}
//                   </Text>
//                   <Text style={{ fontSize: 18, opacity: 0.7 }}>
//                     {item.jobTitle}
//                   </Text>
//                   <Text
//                     style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }}
//                   >
//                     {item.email}
//                   </Text>
//                 </View>
//               </Animated.View>
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// ListScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

// export default ListScreen;





import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
  SafeAreaView,
} from 'react-native';
import ListScreen from './sortedList';

const CreateListPage = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState('');
  const [description, setDescription] = useState('');
  const [lists, setLists] = useState([]);

  const handleCreateList = () => {
    if (!listName.trim() || !description.trim()) {
      Alert.alert('Error', 'Please fill out both the list name and description.');
      return;
    }

    const newList = {
      id: Date.now().toString(),
      name: listName,
      description,
      productCount: Math.floor(Math.random() * 100),
    };
    setLists([...lists, newList]);
    setListName('');
    setDescription('');
    setModalVisible(false);
  };

  const handleDeleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {lists.length === 0 ? (
          <Text style={styles.emptyText}>No lists available. Create a new one!</Text>
        ) : (
          <ScrollView style={styles.listContainer}>
            {lists.map((list) => (
              <TouchableOpacity   onPress={() => navigation.navigate('sortedList')}>
              <View key={list.id} style={styles.listItem}>
                <View style={styles.listInfo}>
                  <Text style={styles.listItemText}>{list.name}</Text>
                  <Text style={styles.listDescription}>
                    {list.description} • {list.productCount} products
                  </Text>
                </View>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => handleDeleteList(list.id)}
                >
                  <Text style={styles.deleteButtonText}>Delete</Text>
                </TouchableOpacity>
              </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}

        {/* Create New List Button */}
        <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
          <Text style={styles.addButtonText}>Create New List</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.modalContainer}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.modalContent}
              >
                <Text style={styles.modalTitle}>Create a New List</Text>

                <TextInput
                  style={styles.input}
                  placeholder="List Name"
                  value={listName}
                  onChangeText={setListName}
                />

                <TextInput
                  style={[styles.input, styles.textArea]}
                  placeholder="Description"
                  value={description}
                  onChangeText={setDescription}
                  multiline
                />

                <TouchableOpacity style={styles.modalButton} onPress={handleCreateList}>
                  <Text style={styles.modalButtonText}>Create List</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setModalVisible(false)}>
                  <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
              </KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: '#f8f9fa',
  },
  emptyText: {
    textAlign: 'center',
    color: '#888',
    fontSize: 16,
  },
  listContainer: {
    marginBottom: 80, // Leave space for the button
  },
  listItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  listInfo: {
    flex: 1,
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  listDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    position: 'absolute', // Make the button fixed
    bottom: 20, // Position it above the bottom edge
    left: 20,
    right: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  modalButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cancelButton: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    margin:8
  },
});
CreateListPage.navigationOptions = () => {
  return {
    headerShown: false,
  };
};


export default CreateListPage;
