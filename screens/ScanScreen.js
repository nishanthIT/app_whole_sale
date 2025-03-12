
// import { CameraView, useCameraPermissions } from 'expo-camera';
// import React, { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons'; // Import icon library
// import {
//   Button,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
 
//   TouchableOpacity,
// } from 'react-native';


// const ScanScreen = ({navigation}) => {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [scanned, setScanned] = useState(false);
//   const [text, setText] = useState('Not yet scanned');
//   const [searchQuery, setSearchQuery] = useState('');

//   if (!permission) {
//     return (
//       <View style={styles.container}>
//         <Text>Requesting for camera permission...</Text>
//       </View>
//     );
//   }

//   if (!permission.granted) {
//     return (
//       <View style={styles.container}>
//         <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
//         <Button onPress={requestPermission} title="Grant Permission" />
//       </View>
//     );
//   }

//   const handleBarCodeScanned = ({ type, data }) => {
//     setScanned(true);
//     setText(data);
//     console.log('Barcode scanned:', data, ' type:', type);
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >
//       {/* Camera Section */}
//       <View style={styles.cameraSection}>
//         <CameraView
//           style={styles.barcodebox}
//           onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
//           barcodeScannerSettings={{
//             barcodeTypes: ['upc_e', 'upc_a'],
//           }}
//         />
//       </View>

//       {/* Search Section */}
//       <TouchableOpacity
//       style={styles.searchSection}
//         activeOpacity={0.7}
//         onPress={() => navigation.navigate('Main')}
// >
  
//     <View style ={styles.searchInput}>
//     <Ionicons name="search" size={20} color="#888" style={styles.icon} />
//     <TextInput
//      // style={styles.searchInput}
//       placeholder="Search for products..."
//       value={searchQuery}
//       editable={false} // Prevent typing
//       pointerEvents="none" // Makes it non-interactive
//     />
//     </View>
  
// </TouchableOpacity>

     

     
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   cameraSection: {
//     flex: 3,
//     justifyContent: 'flex-end', // Align camera closer to the search bar
//     marginTop:60,
//     alignItems: 'center',
//     paddingBottom: 10, // Minimized space between camera and search bar
//   },
//   searchSection: {
//     flex: 2,
//     justifyContent: 'flex-start', // Search bar close to the camera
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 10, // Reduced space above search bar

//   },

//   barcodebox: {
//     width: '90%',
//     height: '70%',
//     borderRadius: 20, // Rounded corners for the camera
//     overflow: 'hidden',
//     backgroundColor: '#ccc',
//   },
//   searchInput: {
//     width: '90%',
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 15,
//     fontSize: 16,
//     backgroundColor: '#f9f9f9',
//     fontSize: 16,
//     color: '#000',

//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   maintext: {
//     fontSize: 16,
//     // marginVertical: 20,
//   },
 
  
// });


// ScanScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };



// export default ScanScreen;

import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  ScrollView,
  Switch,

} from 'react-native';

const ScanScreen = ({ navigation }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isToggleEnabled, setIsToggleEnabled] = useState(false);

  const dropdownList = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Option 5',
    'Option 6',
    'Option 7',
    'Option 8',
    'Option 9',
    'Option 10',
  ];

  const toggleSwitch = () => setIsToggleEnabled((prev) => !prev);


  if (!permission) {
    return (
      <View style={styles.container}>
        <Text>Requesting for camera permission...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log('Barcode scanned:', data, ' type:', type);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >

<View style={styles.toggleSection}>
        <Text style={styles.toggleLabel}>Add Products to List</Text>
        <Switch
          value={isToggleEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor={isToggleEnabled ? '#fff' : '#888'}
        />
      </View>
      {/* Dropdown Button Section (Moved to Top) */}
      {isToggleEnabled && <View style={styles.dropdownSection}>
        <TouchableOpacity
          style={styles.dropdownButton}
          activeOpacity={0.7}
          onPress={toggleDropdown}
        >
          <Text style={styles.dropdownButtonText}>
            {selectedItems.length > 0
              ? `${selectedItems.slice(0, 3).join(', ')}${selectedItems.length > 3 ? ', ...' : ''}`
              : 'Select options'}
          </Text>
          <Ionicons
            name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
            size={20}
            color="#888"
          />
        </TouchableOpacity>
      </View>}
      

      {/* Camera Section */}
      <View style={styles.cameraSection}>
        <CameraView
          style={styles.barcodebox}
          onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
          barcodeScannerSettings={{
            barcodeTypes: ['upc_e', 'upc_a'],
          }}
        />
      </View>

      {/* Search Section */}
      <TouchableOpacity
        style={styles.searchSection}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('Main')}
      >
        <View style={styles.searchInput}>
          <Ionicons name="search" size={20} color="#888" style={styles.icon} />
          <TextInput
            placeholder="Search for products..."
            value={searchQuery}
            editable={false}
            pointerEvents="none"
          />
        </View>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={toggleDropdown}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Select Options</Text>
            <ScrollView style={styles.modalScroll}>
              {dropdownList.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.modalItem}
                  onPress={() => handleSelectItem(item)}
                >
                  <Ionicons
                    name={selectedItems.includes(item) ? 'checkbox' : 'square-outline'}
                    size={20}
                    color="#007BFF"
                    style={styles.checkboxIcon}
                  />
                  <Text style={styles.modalItemText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={toggleDropdown}
            >
              <Text style={styles.confirmButtonText}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  cameraSection: {
    flex: 3,
    justifyContent: 'flex-end',
    marginTop: 60,
    alignItems: 'center',
    paddingBottom: 10,
  }, 
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    margin: 20,
    marginTop: 40,
  },
  toggleLabel: {
    fontSize: 16,
    color: '#000',
  },
  searchSection: {
    flex: 2,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  barcodebox: {
    width: '90%',
    height: '70%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ccc',
  },
  searchInput: {
    width: '90%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropdownSection: {
    position: 'absolute', // Move to absolute positioning
    top: 110, // Adjust to move the button closer to the top
    width: '100%',
    alignItems: 'center',
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    height: 50,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalScroll: {
    maxHeight: 300,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  modalItemText: {
    fontSize: 16,
    marginLeft: 10,
  },
  checkboxIcon: {
    marginRight: 10,
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    marginTop: 20,
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

ScanScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default ScanScreen;
