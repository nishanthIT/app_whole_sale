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





// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Modal,
//   TextInput,
//   ScrollView,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
//   Keyboard,
//   TouchableWithoutFeedback,
//   SafeAreaView,
// } from 'react-native';
// import ListScreen from './sortedList';

// const CreateListPage = ({navigation}) => {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [listName, setListName] = useState('');
//   const [description, setDescription] = useState('');
//   const [lists, setLists] = useState([]);

//   const handleCreateList = () => {
//     if (!listName.trim() || !description.trim()) {
//       Alert.alert('Error', 'Please fill out both the list name and description.');
//       return;
//     }

//     const newList = {
//       id: Date.now().toString(),
//       name: listName,
//       description,
//       productCount: Math.floor(Math.random() * 100),
//     };
//     setLists([...lists, newList]);
//     setListName('');
//     setDescription('');
//     setModalVisible(false);
//   };

//   const handleDeleteList = (id) => {
//     setLists(lists.filter((list) => list.id !== id));
//   };

//   const dismissKeyboard = () => {
//     Keyboard.dismiss();
//   };

//   return (
//     <SafeAreaView style={styles.safeArea}>
//       <View style={styles.container}>
//         {lists.length === 0 ? (
//           <Text style={styles.emptyText}>No lists available. Create a new one!</Text>
//         ) : (
//           <ScrollView style={styles.listContainer}>
//             {lists.map((list) => (
//               <TouchableOpacity   onPress={() => navigation.navigate('sortedList')}>
//               <View key={list.id} style={styles.listItem}>
//                 <View style={styles.listInfo}>
//                   <Text style={styles.listItemText}>{list.name}</Text>
//                   <Text style={styles.listDescription}>
//                     {list.description} • {list.productCount} products
//                   </Text>
//                 </View>
//                 <TouchableOpacity
//                   style={styles.deleteButton}
//                   onPress={() => handleDeleteList(list.id)}
//                 >
//                   <Text style={styles.deleteButtonText}>Delete</Text>
//                 </TouchableOpacity>
//               </View>
//               </TouchableOpacity>
//             ))}
//           </ScrollView>
//         )}

//         {/* Create New List Button */}
//         <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
//           <Text style={styles.addButtonText}>Create New List</Text>
//         </TouchableOpacity>

//         <Modal
//           animationType="slide"
//           transparent={true}
//           visible={modalVisible}
//           onRequestClose={() => setModalVisible(false)}
//         >
//           <TouchableWithoutFeedback onPress={dismissKeyboard}>
//             <View style={styles.modalContainer}>
//               <KeyboardAvoidingView
//                 behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//                 style={styles.modalContent}
//               >
//                 <Text style={styles.modalTitle}>Create a New List</Text>

//                 <TextInput
//                   style={styles.input}
//                   placeholder="List Name"
//                   value={listName}
//                   onChangeText={setListName}
//                 />

//                 <TextInput
//                   style={[styles.input, styles.textArea]}
//                   placeholder="Description"
//                   value={description}
//                   onChangeText={setDescription}
//                   multiline
//                 />

//                 <TouchableOpacity style={styles.modalButton} onPress={handleCreateList}>
//                   <Text style={styles.modalButtonText}>Create List</Text>
//                 </TouchableOpacity>

//                 <TouchableOpacity onPress={() => setModalVisible(false)}>
//                   <Text style={styles.cancelButton}>Cancel</Text>
//                 </TouchableOpacity>
//               </KeyboardAvoidingView>
//             </View>
//           </TouchableWithoutFeedback>
//         </Modal>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#f8f9fa',
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     paddingTop: 40,
//     backgroundColor: '#f8f9fa',
//   },
//   emptyText: {
//     textAlign: 'center',
//     color: '#888',
//     fontSize: 16,
//   },
//   listContainer: {
//     marginBottom: 80, // Leave space for the button
//   },
//   listItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     elevation: 2,
//   },
//   listInfo: {
//     flex: 1,
//   },
//   listItemText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   listDescription: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   deleteButton: {
//     backgroundColor: '#ff4d4d',
//     paddingVertical: 8,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//   },
//   deleteButtonText: {
//     color: '#fff',
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   addButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     position: 'absolute', // Make the button fixed
//     bottom: 20, // Position it above the bottom edge
//     left: 20,
//     right: 20,
//   },
//   addButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     padding: 20,
//     borderRadius: 8,
//     width: '90%',
//     alignItems: 'center',
//   },
//   modalTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: '#fff',
//   },
//   textArea: {
//     height: 100,
//     textAlignVertical: 'top',
//   },
//   modalButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 15,
//     borderRadius: 8,
//     alignItems: 'center',
//     width: '100%',
//     marginBottom: 10,
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   cancelButton: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     margin:8
//   },
// });
// CreateListPage.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };


// export default CreateListPage;




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
  Animated,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ListScreen from './sortedList';

const { width, height } = Dimensions.get('window');

const CreateListPage = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [listName, setListName] = useState('');
  const [lists, setLists] = useState([]);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [slideAnim] = useState(new Animated.Value(50));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleCreateList = () => {
    if (!listName.trim()) {
      Alert.alert('Missing Information', 'Please enter a list name.', [
        { text: 'OK', style: 'default' }
      ]);
      return;
    }

    const newList = {
      id: Date.now().toString(),
      name: listName,
      productCount: Math.floor(Math.random() * 50) + 1,
      createdAt: new Date().toLocaleDateString(),
      color: getRandomColor(),
    };
    
    setLists([newList, ...lists]);
    setListName('');
    setModalVisible(false);
    
    // Success feedback
    Alert.alert('Success!', 'List created successfully', [
      { text: 'OK', style: 'default' }
    ]);
  };

  const getRandomColor = () => {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8', '#F7DC6F'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const handleDeleteList = (id, listName) => {
    Alert.alert(
      'Delete List',
      `Are you sure you want to delete "${listName}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Delete', 
          style: 'destructive',
          onPress: () => setLists(lists.filter((list) => list.id !== id))
        }
      ]
    );
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setListName('');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Header */}
      <Animated.View 
        style={[
          styles.header,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }]
          }
        ]}
      >
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>My Lists</Text>
          <Text style={styles.headerSubtitle}>
            {lists.length === 0 ? 'Create your first list' : `${lists.length} ${lists.length === 1 ? 'list' : 'lists'}`}
          </Text>
        </View>
        {/* <TouchableOpacity style={styles.headerButton} onPress={openModal}>
          <Ionicons name="add" size={24} color="#fff" />
        </TouchableOpacity> */}
      </Animated.View>

      <View style={styles.container}>
        {lists.length === 0 ? (
          <Animated.View 
            style={[
              styles.emptyState,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }]
              }
            ]}
          >
            <View style={styles.emptyIconContainer}>
              <Ionicons name="list-outline" size={80} color="#E0E6ED" />
            </View>
            <Text style={styles.emptyTitle}>No Lists Yet</Text>
            <Text style={styles.emptySubtitle}>
              Create your first shopping list{'\n'}to get started organizing!
            </Text>
            <TouchableOpacity style={styles.primaryButton} onPress={openModal}>
              <Ionicons name="add-circle" size={20} color="#fff" style={styles.buttonIcon} />
              <Text style={styles.primaryButtonText}>Create Your First List</Text>
            </TouchableOpacity>
          </Animated.View>
        ) : (
          <ScrollView 
            style={styles.listContainer}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {lists.map((list, index) => (
              <Animated.View
                key={list.id}
                style={[
                  styles.listCard,
                  {
                    opacity: fadeAnim,
                    transform: [{ translateY: slideAnim }]
                  }
                ]}
              >
                <TouchableOpacity 
                  style={styles.listCardContent}
                  onPress={() => navigation.navigate('sortedList')}
                  activeOpacity={0.7}
                >
                  <View style={styles.listCardLeft}>
                    <View style={[styles.listColorIndicator, { backgroundColor: list.color }]} />
                    <View style={styles.listCardInfo}>
                      <Text style={styles.listTitle}>{list.name}</Text>
                      <View style={styles.listMeta}>
                        <Ionicons name="cube-outline" size={14} color="#8F9BB3" />
                        <Text style={styles.listMetaText}>
                          {list.productCount} {list.productCount === 1 ? 'item' : 'items'}
                        </Text>
                        <Ionicons name="calendar-outline" size={14} color="#8F9BB3" style={styles.metaIcon} />
                        <Text style={styles.listMetaText}>{list.createdAt}</Text>
                      </View>
                    </View>
                  </View>
                  <TouchableOpacity
                    style={styles.deleteButton}
                    onPress={() => handleDeleteList(list.id, list.name)}
                    activeOpacity={0.7}
                  >
                    <Ionicons name="trash-outline" size={18} color="#FF3D71" />
                  </TouchableOpacity>
                </TouchableOpacity>
              </Animated.View>
            ))}
          </ScrollView>
        )}

        {/* Floating Action Button */}
        {lists.length > 0 && (
          <TouchableOpacity 
            style={styles.floatingButton} 
            onPress={openModal}
            activeOpacity={0.8}
          >
            <Ionicons name="add" size={28} color="#fff" />
          </TouchableOpacity>
        )}

        {/* Enhanced Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <TouchableWithoutFeedback onPress={dismissKeyboard}>
            <View style={styles.modalOverlay}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.modalContainer}
              >
                <View style={styles.modalContent}>
                  {/* Modal Header */}
                  <View style={styles.modalHeader}>
                    <TouchableOpacity onPress={closeModal} style={styles.modalCloseButton}>
                      <Ionicons name="close" size={24} color="#8F9BB3" />
                    </TouchableOpacity>
                    <Text style={styles.modalTitle}>Create New List</Text>
                    <View style={styles.modalHeaderSpacer} />
                  </View>

                  {/* Modal Body */}
                  <View style={styles.modalBody}>
                    <View style={styles.inputContainer}>
                      <Ionicons name="list" size={20} color="#8F9BB3" style={styles.inputIcon} />
                      <TextInput
                        style={styles.input}
                        placeholder="Enter list name"
                        placeholderTextColor="#C5CEE0"
                        value={listName}
                        onChangeText={setListName}
                        autoFocus={true}
                        maxLength={30}
                      />
                    </View>
                    
                    <Text style={styles.inputHint}>
                      Choose a descriptive name for your shopping list
                    </Text>
                  </View>

                  {/* Modal Footer */}
                  <View style={styles.modalFooter}>
                    <TouchableOpacity 
                      style={styles.secondaryButton} 
                      onPress={closeModal}
                      activeOpacity={0.7}
                    >
                      <Text style={styles.secondaryButtonText}>Cancel</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity 
                      style={[
                        styles.primaryButton,
                        !listName.trim() && styles.disabledButton
                      ]} 
                      onPress={handleCreateList}
                      activeOpacity={0.7}
                      disabled={!listName.trim()}
                    >
                      <Ionicons name="checkmark-circle" size={20} color="#fff" style={styles.buttonIcon} />
                      <Text style={styles.primaryButtonText}>Create List</Text>
                    </TouchableOpacity>
                  </View>
                </View>
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
    backgroundColor: '#F7F9FC',
  },
  header: {
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  headerContent: {
    flex: 1,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#192038',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#8F9BB3',
  },
  headerButton: {
    backgroundColor: '#5B67CA',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#5B67CA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#F7F9FC',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 2,
    borderColor: '#E4E9F2',
    borderStyle: 'dashed',
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#192038',
    marginBottom: 12,
  },
  emptySubtitle: {
    fontSize: 16,
    color: '#8F9BB3',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingTop: 20,
    paddingBottom: 100,
  },
  listCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
  },
  listCardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  listCardLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  listColorIndicator: {
    width: 4,
    height: 40,
    borderRadius: 2,
    marginRight: 16,
  },
  listCardInfo: {
    flex: 1,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#192038',
    marginBottom: 8,
  },
  listMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listMetaText: {
    fontSize: 14,
    color: '#8F9BB3',
    marginLeft: 4,
  },
  metaIcon: {
    marginLeft: 16,
  },
  deleteButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFF5F5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#5B67CA',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 8,
    shadowColor: '#5B67CA',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'flex-end',
  },
  modalContainer: {
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingBottom: Platform.OS === 'ios' ? 34 : 20,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E9F2',
  },
  modalCloseButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F7F9FC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#192038',
    textAlign: 'center',
  },
  modalHeaderSpacer: {
    width: 40,
  },
  modalBody: {
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#E4E9F2',
  },
  inputIcon: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    height: 52,
    fontSize: 16,
    color: '#192038',
  },
  inputHint: {
    fontSize: 14,
    color: '#8F9BB3',
    marginTop: 8,
    marginLeft: 4,
  },
  modalFooter: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
primaryButton: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#5B67CA',
  borderRadius: 12,
  paddingVertical: 12,
  paddingHorizontal: 20,
  alignSelf: 'center',
  maxWidth: 220,
},
primaryButtonText: {
  color: '#fff',
  fontSize: 14,
  fontWeight: 'bold',
}
,
  secondaryButton: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    borderRadius: 12,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E4E9F2',
  },
  secondaryButtonText: {
    color: '#8F9BB3',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonIcon: {
    marginRight: 8,
  },
  disabledButton: {
    backgroundColor: '#C5CEE0',
    elevation: 0,
    shadowOpacity: 0,
  },
});

CreateListPage.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default CreateListPage;