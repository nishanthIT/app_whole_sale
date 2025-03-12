

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
//   Modal,
//   Pressable,
// } from 'react-native';
// import { faker } from '@faker-js/faker';
// import Icon from 'react-native-vector-icons/MaterialIcons';

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
//   const [sortModalVisible, setSortModalVisible] = React.useState(false);

//   const handleFilter = () => {
//     console.log('Filter action triggered');
//   };

//   const handleSort = () => {
//     setSortModalVisible(true);
//   };

//   const handlePrint = () => {
//     console.log('Print action triggered');
//   };

//   const handleShare = () => {
//     console.log('Share action triggered');
//   };

//   const handleSortOption = (option) => {
//     console.log(`Sort by: ${option}`);
//     setSortModalVisible(false);
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Options Bar */}
//       <View style={styles.optionsBar}>
//         <TouchableOpacity style={styles.optionButton} onPress={handleFilter}>
//           <Icon name="filter-list" size={24} color="#fff" />
//           <Text style={styles.optionText}>Filter</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleSort}>
//           <Icon name="sort" size={24} color="#fff" />
//           <Text style={styles.optionText}>Sort</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handlePrint}>
//           <Icon name="print" size={24} color="#fff" />
//           <Text style={styles.optionText}>Print</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleShare}>
//           <Icon name="share" size={24} color="#fff" />
//           <Text style={styles.optionText}>Share</Text>
//         </TouchableOpacity>
//       </View>

//       {/* List */}
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

//       {/* Sort Modal */}
//       <Modal
//   animationType="none" // Changed from "slide" to "none" for instant opening
//   transparent={true}
//   visible={sortModalVisible}
//   onRequestClose={() => setSortModalVisible(false)}
// >
//   <View style={styles.modalOverlay}>
//     <View style={styles.modalContainer}>
//       <Text style={styles.modalTitle}>Sort By</Text>
//       <TouchableOpacity
//         style={styles.modalOption}
//         onPress={() => handleSortOption('Money Save')}
//       >
//         <Text style={styles.modalOptionText}>Money Save</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.modalOption}
//         onPress={() => handleSortOption('Nearby')}
//       >
//         <Text style={styles.modalOptionText}>Nearby</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={styles.modalOption}
//         onPress={() => handleSortOption('Only Shop in Wishlist')}
//       >
//         <Text style={styles.modalOptionText}>Only Shop in Wishlist</Text>
//       </TouchableOpacity>
//       <Pressable
//         style={[styles.modalOption, { backgroundColor: '#ccc' }]}
//         onPress={() => setSortModalVisible(false)}
//       >
//         <Text style={styles.modalOptionText}>Cancel</Text>
//       </Pressable>
//     </View>
//   </View>
// </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//     optionsBar: {
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         paddingVertical: SPACING / 2,
//         marginTop: SPACING * 3, // Moved further down
//         backgroundColor: '#6200ee',
//         borderRadius: 12,
//         marginHorizontal: SPACING,
//       },
//   optionButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   optionText: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContainer: {
//     width: width * 0.8,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: SPACING,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: SPACING,
//   },
//   modalOption: {
//     padding: SPACING / 2,
//     marginBottom: SPACING / 2,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   modalOptionText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// ListScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

// export default ListScreen;







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
//   Modal,
//   Pressable,
//   Share,
// } from 'react-native';
// import { faker } from '@faker-js/faker';
// import Icon from 'react-native-vector-icons/MaterialIcons';

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
//   const [sortModalVisible, setSortModalVisible] = React.useState(false);

//   const handleFilter = () => {
//     console.log('Filter action triggered');
//   };

//   const handleSort = () => {
//     setSortModalVisible(true);
//   };

//   const handlePrint = () => {
//     console.log('Print action triggered');
//   };

//   const handleShare = () => {
//     // Convert data to a table-like string
//     const tableHeader = `Name | Job Title | Email\n${'-'.repeat(40)}\n`;
//     const tableBody = DATA.map(
//       (item) => `${item.name} | ${item.jobTitle} | ${item.email}`
//     ).join('\n');

//     const tableString = tableHeader + tableBody;

//     // Share the formatted string
//     Share.share({
//       message: `Here is the list:\n\n${tableString}`,
//     })
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error));
//   };

//   const handleSortOption = (option) => {
//     console.log(`Sort by: ${option}`);
//     setSortModalVisible(false);
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Options Bar */}
//       <View style={styles.optionsBar}>
//         <TouchableOpacity style={styles.optionButton} onPress={handleFilter}>
//           <Icon name="filter-list" size={24} color="#fff" />
//           <Text style={styles.optionText}>Filter</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleSort}>
//           <Icon name="sort" size={24} color="#fff" />
//           <Text style={styles.optionText}>Sort</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handlePrint}>
//           <Icon name="print" size={24} color="#fff" />
//           <Text style={styles.optionText}>Print</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleShare}>
//           <Icon name="share" size={24} color="#fff" />
//           <Text style={styles.optionText}>Share</Text>
//         </TouchableOpacity>
//       </View>

//       {/* List */}
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

//       {/* Sort Modal */}
//       <Modal
//         animationType="none"
//         transparent={true}
//         visible={sortModalVisible}
//         onRequestClose={() => setSortModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Sort By</Text>
//             <TouchableOpacity
//               style={styles.modalOption}
//               onPress={() => handleSortOption('Money Save')}
//             >
//               <Text style={styles.modalOptionText}>Money Save</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalOption}
//               onPress={() => handleSortOption('Nearby')}
//             >
//               <Text style={styles.modalOptionText}>Nearby</Text>
//             </TouchableOpacity>
//             <TouchableOpacity
//               style={styles.modalOption}
//               onPress={() => handleSortOption('Only Shop in Wishlist')}
//             >
//               <Text style={styles.modalOptionText}>Only Shop in Wishlist</Text>
//             </TouchableOpacity>
//             <Pressable
//               style={[styles.modalOption, { backgroundColor: '#ccc' }]}
//               onPress={() => setSortModalVisible(false)}
//             >
//               <Text style={styles.modalOptionText}>Cancel</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   optionsBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: SPACING / 2,
//     marginTop: SPACING * 3,
//     backgroundColor: '#6200ee',
//     borderRadius: 12,
//     marginHorizontal: SPACING,
//   },
//   optionButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   optionText: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContainer: {
//     width: width * 0.8,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: SPACING,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: SPACING,
//   },
//   modalOption: {
//     padding: SPACING / 2,
//     marginBottom: SPACING / 2,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   modalOptionText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// ListScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

// export default ListScreen;



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
//   Modal,
//   ScrollView,
//   Pressable,
//   Share,
// } from 'react-native';
// import { faker } from '@faker-js/faker';
// import Icon from 'react-native-vector-icons/MaterialIcons';

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
//   const [sortModalVisible, setSortModalVisible] = React.useState(false);
//   const [tableModalVisible, setTableModalVisible] = React.useState(false);

//   const handleFilter = () => {
//     console.log('Filter action triggered');
//   };

//   const handleSort = () => {
//     setSortModalVisible(true);
//   };

//   const handlePrint = () => {
//     setTableModalVisible(true);
//   };

//   const handleShare = () => {
//     // Convert data to a table-like string
//     const tableHeader = `Name               | Job Title              | Email\n${'-'.repeat(50)}\n`;
//     const tableBody = DATA.map(
//       (item) =>
//         `${item.name.padEnd(18)} | ${item.jobTitle.padEnd(20)} | ${item.email}`
//     ).join('\n');

//     const tableString = tableHeader + tableBody;

//     // Share the formatted string
//     Share.share({
//       message: `Here is the list:\n\n${tableString}`,
//     })
//       .then((result) => console.log(result))
//       .catch((error) => console.error(error));
//   };

//   const handleSortOption = (option) => {
//     console.log(`Sort by: ${option}`);
//     setSortModalVisible(false);
//   };

//   return (
//     <View style={{ flex: 1, backgroundColor: '#fff' }}>
//       {/* Options Bar */}
//       <View style={styles.optionsBar}>
//         <TouchableOpacity style={styles.optionButton} onPress={handleFilter}>
//           <Icon name="filter-list" size={24} color="#fff" />
//           <Text style={styles.optionText}>Filter</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleSort}>
//           <Icon name="sort" size={24} color="#fff" />
//           <Text style={styles.optionText}>Sort</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handlePrint}>
//           <Icon name="print" size={24} color="#fff" />
//           <Text style={styles.optionText}>Print</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.optionButton} onPress={handleShare}>
//           <Icon name="share" size={24} color="#fff" />
//           <Text style={styles.optionText}>Share</Text>
//         </TouchableOpacity>
//       </View>

//       {/* List */}
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

//       {/* Table Modal */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={tableModalVisible}
//         onRequestClose={() => setTableModalVisible(false)}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={[styles.modalContainer, { height: height * 0.7 }]}>
//             <Text style={styles.modalTitle}>Table View</Text>
//             <ScrollView>
//               {DATA.map((item, index) => (
//                 <View key={index} style={styles.tableRow}>
//                   <Text style={styles.tableCell}>{item.name}</Text>
//                   <Text style={styles.tableCell}>{item.jobTitle}</Text>
//                   <Text style={styles.tableCell}>{item.email}</Text>
//                 </View>
//               ))}
//             </ScrollView>
//             <Pressable
//               style={[styles.modalOption, { backgroundColor: '#ccc' }]}
//               onPress={() => setTableModalVisible(false)}
//             >
//               <Text style={styles.modalOptionText}>Close</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   optionsBar: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center',
//     paddingVertical: SPACING / 2,
//     marginTop: SPACING * 3,
//     backgroundColor: '#6200ee',
//     borderRadius: 12,
//     marginHorizontal: SPACING,
//   },
//   optionButton: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   optionText: {
//     color: '#fff',
//     fontSize: 12,
//     marginTop: 4,
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContainer: {
//     width: width * 0.9,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     padding: SPACING,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: '700',
//     marginBottom: SPACING,
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: SPACING / 2,
//     borderBottomWidth: 1,
//     borderColor: '#ccc',
//   },
//   tableCell: {
//     flex: 1,
//     textAlign: 'left',
//     fontSize: 14,
//   },
//   modalOption: {
//     padding: SPACING / 2,
//     marginTop: SPACING / 2,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//   },
//   modalOptionText: {
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

// ListScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

// export default ListScreen;





// import React, { useRef } from 'react';
// import { View, Text, TouchableOpacity, Animated, StyleSheet, Dimensions } from 'react-native';
// import { faker } from '@faker-js/faker';
// import RNHTMLtoPDF from 'react-native-html-to-pdf';
// import Share from 'react-native-share';

// const { width, height } = Dimensions.get('screen');
// faker.seed(10);

// const DATA = [...Array(10).keys()].map(() => ({
//   name: faker.person.fullName(),
//   jobTitle: faker.person.jobTitle(),
//   email: faker.internet.email(),
// }));

// const SPACING = 20;

// const App = () => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   const generateAndSharePDF = async () => {
//     const tableRows = DATA.map(
//       (item) =>
//         `<tr>
//           <td>${item.name}</td>
//           <td>${item.jobTitle}</td>
//           <td>${item.email}</td>
//         </tr>`
//     ).join('');

//     const htmlContent = `
//       <html>
//       <head>
//         <style>
//           table {
//             width: 100%;
//             border-collapse: collapse;
//           }
//           th, td {
//             border: 1px solid #ddd;
//             padding: 8px;
//           }
//           th {
//             background-color: #f2f2f2;
//           }
//         </style>
//       </head>
//       <body>
//         <h1>Employee List</h1>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Job Title</th>
//               <th>Email</th>
//             </tr>
//           </thead>
//           <tbody>
//             ${tableRows}
//           </tbody>
//         </table>
//       </body>
//       </html>
//     `;

//     const pdf = await RNHTMLtoPDF.convert({
//       html: htmlContent,
//       fileName: 'Employee_List',
//       base64: true,
//     });

//     await Share.open({
//       title: 'Share PDF',
//       url: `data:application/pdf;base64,${pdf.base64}`,
//       type: 'application/pdf',
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Animated.FlatList
//         data={DATA}
//         keyExtractor={(item, index) => index.toString()}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: true }
//         )}
//         contentContainerStyle={{
//           padding: SPACING,
//         }}
//         renderItem={({ item, index }) => {
//           return (
//             <View style={styles.item}>
//               <Text style={styles.text}>{item.name}</Text>
//               <Text style={styles.text}>{item.jobTitle}</Text>
//               <Text style={styles.text}>{item.email}</Text>
//             </View>
//           );
//         }}
//       />
//       <TouchableOpacity style={styles.button} onPress={generateAndSharePDF}>
//         <Text style={styles.buttonText}>Generate & Share PDF</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   item: {
//     marginBottom: SPACING,
//     padding: SPACING,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//   },
//   text: {
//     fontSize: 14,
//     fontWeight: 'bold',
//   },
//   button: {
//     position: 'absolute',
//     bottom: 30,
//     left: 30,
//     right: 30,
//     backgroundColor: '#007BFF',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default App;




import * as React from 'react';
import {
  StatusBar,
  Animated,
  Text,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { faker } from '@faker-js/faker';
import { printToFileAsync } from 'expo-print';
import {shareAsync} from 'expo-sharing';

import Icon from 'react-native-vector-icons/MaterialIcons';

const { width, height } = Dimensions.get('screen');

faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
  return {
    key: faker.string.uuid(),
    image: `https://randomuser.me/api/portraits/${faker.helpers.arrayElement([
      'women',
      'men',
    ])}/${faker.number.int({ max: 60 })}.jpg`,
    name: faker.person.fullName(),
    jobTitle: faker.person.jobTitle(),
    email: faker.internet.email(),
  };
});

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

const ListScreen = ({ navigation }) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const [sortModalVisible, setSortModalVisible] = React.useState(false);

  const handleFilter = () => {
    console.log('Filter action triggered');
  };

  const handleSort = () => {
    setSortModalVisible(true);
  };

  const handlePrint = () => {
    console.log('Print action triggered');
  };

  const handleShare = () => {
    console.log('Share action triggered');
  };

  const handleSortOption = (option) => {
    console.log(`Sort by: ${option}`);
    setSortModalVisible(false);
  };


  const shops = [
    {
      name: "Shop 1",
      address: "123 Main Street, Chennai",
      mobile: "+91 98765 43210",
      products: [
        { name: "Product A", size: "Large", price: "₹500" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
        { name: "Product B", size: "Medium", price: "₹350" },
      ],
    },
    {
      name: "Shop 2",
      address: "456 Market Road, Bangalore",
      mobile: "+91 87654 32109",
      products: [
        { name: "Product X", size: "Small", price: "₹250" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
        { name: "Product Y", size: "Large", price: "₹700" },
      ],
    },
  ]



  const html = 
  `
  <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Shop Inventory</title>
      <style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f4f4f9;
        margin: 0;
        padding: 20px;
    }
    .shop-container {
        margin-top: 50px; /* Ensure consistent spacing between shops */
    }
    .page-break {
        page-break-before: always; /* Breaks pages for shops after the first one */
    }
    .shop-details {
        text-align: center;
        margin: 20px 0;
    }
    .shop-details p {
        margin: 5px 0;
        font-size: 16px;
        color: #555;
    }
    table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    th, td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: center;
    }
    th {
        background-color: #007BFF;
        color: white;
    }
    tr:hover {
        background-color: #f1f1f1;
    }
    @media print {
        body {
            margin: 0; /* Reset margins for print */
        }
        table, th, td {
            page-break-inside: avoid; /* Prevent table rows from splitting */
        }
        tr {
            page-break-after: auto; /* Allow table rows to break naturally */
        }
    }
</style>

<body>
    ${shops
      .map(
        (shop, index) => `
        <div class="shop-container ${index === 0 ? "" : "page-break"}">
            <div class="shop-details">
                <h2>${shop.name}</h2>
                <p>Shop Address: ${shop.address}</p>
                <p>Mobile: ${shop.mobile}</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Retail Size</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${shop.products
                      .map(
                        (product) => `
                        <tr>
                            <td>${product.name}</td>
                            <td>${product.size}</td>
                            <td>${product.price}</td>
                        </tr>
                    `
                      )
                      .join("")}
                </tbody>
            </table>
        </div>
    `
      )
      .join("")}
</body>
    </html>

  `;

  let generatePdf  = async ()=>{
    const file = await printToFileAsync({
      html:html,
      base64:false
    });
    await shareAsync(file.uri);

  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      {/* Options Bar */}
      <View style={styles.optionsBar}>
        {/* <TouchableOpacity style={styles.optionButton} onPress={handleFilter}>
          <Icon name="filter-list" size={24} color="#fff" />
          <Text style={styles.optionText}>Filter</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.optionButton} onPress={handleSort}>
          <Icon name="sort" size={24} color="#fff" />
          <Text style={styles.optionText}>Sort</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.optionButton} onPress={generatePdf}>
          <Icon name="print" size={24} color="#fff" />
          <Text style={styles.optionText}>Print</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.optionButton} onPress={generatePdf}>
          <Icon name="share" size={24} color="#fff" />
          <Text style={styles.optionText}>Share</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <Animated.FlatList
        data={DATA}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];
          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          const opacity = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ListDetail', { item })}
            >
              <Animated.View
                style={{
                  flexDirection: 'row',
                  padding: SPACING,
                  marginBottom: SPACING,
                  backgroundColor: 'rgba(255,255,255,0.8)',
                  borderRadius: 12,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 10,
                  },
                  shadowOpacity: 0.3,
                  shadowRadius: 20,
                  opacity,
                  transform: [{ scale }],
                }}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{
                    width: AVATAR_SIZE,
                    height: AVATAR_SIZE,
                    borderRadius: AVATAR_SIZE,
                    marginRight: SPACING / 2,
                  }}
                />
                <View>
                  <Text style={{ fontSize: 22, fontWeight: '700' }}>
                    {item.name}
                  </Text>
                  <Text style={{ fontSize: 18, opacity: 0.7 }}>
                    {item.jobTitle}
                  </Text>
                  <Text
                    style={{ fontSize: 14, opacity: 0.8, color: '#0099cc' }}
                  >
                    {item.email}
                  </Text>
                </View>
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />

      {/* Sort Modal */}
      // Inside the Modal component
<Modal
  animationType="none" // Changed from "slide" to "none" for instant opening
  transparent={true}
  visible={sortModalVisible}
  onRequestClose={() => setSortModalVisible(false)}
>
  <View style={styles.modalOverlay}>
    <View style={styles.modalContainer}>
      <Text style={styles.modalTitle}>Sort By</Text>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleSortOption('Money Save')}
      >
        <Text style={styles.modalOptionText}>Money Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleSortOption('Nearby')}
      >
        <Text style={styles.modalOptionText}>Nearby</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.modalOption}
        onPress={() => handleSortOption('Only Shop in Wishlist')}
      >
        <Text style={styles.modalOptionText}>Only Shop in Wishlist</Text>
      </TouchableOpacity>
      <Pressable
        style={[styles.modalOption, { backgroundColor: '#ccc' }]}
        onPress={() => setSortModalVisible(false)}
      >
        <Text style={styles.modalOptionText}>Cancel</Text>
      </Pressable>
    </View>
  </View>
</Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  optionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: SPACING / 2,
    marginTop: SPACING * 2.2, // Moved further down
    backgroundColor: '#4361ee',
    borderRadius: 12,
    marginHorizontal: SPACING,
  },
  optionButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  optionText: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    width: width * 0.8,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: SPACING,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: SPACING,
  },
  modalOption: {
    padding: SPACING / 2,
    marginBottom: SPACING / 2,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  modalOptionText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

ListScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default ListScreen;
