
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












// import { CameraView, useCameraPermissions } from 'expo-camera';
// import React, { useState } from 'react';
// import { Ionicons } from '@expo/vector-icons';
// import {
//   Button,
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   KeyboardAvoidingView,
//   Platform,
//   TouchableOpacity,
//   Modal,
//   ScrollView,
//   Switch,

// } from 'react-native';

// const ScanScreen = ({ navigation }) => {
//   const [permission, requestPermission] = useCameraPermissions();
//   const [scanned, setScanned] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [isDropdownVisible, setDropdownVisible] = useState(false);
//   const [selectedItems, setSelectedItems] = useState([]);
//   const [isToggleEnabled, setIsToggleEnabled] = useState(false);

//   const dropdownList = [
//     'Option 1',
//     'Option 2',
//     'Option 3',
//     'Option 4',
//     'Option 5',
//     'Option 6',
//     'Option 7',
//     'Option 8',
//     'Option 9',
//     'Option 10',
//   ];

//   const toggleSwitch = () => setIsToggleEnabled((prev) => !prev);


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
//     console.log('Barcode scanned:', data, ' type:', type);
//   };

//   const toggleDropdown = () => {
//     setDropdownVisible(!isDropdownVisible);
//   };

//   const handleSelectItem = (item) => {
//     if (selectedItems.includes(item)) {
//       setSelectedItems(selectedItems.filter((i) => i !== item));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}
//     >

// <View style={styles.toggleSection}>
//         <Text style={styles.toggleLabel}>Add Products to List</Text>
//         <Switch
//           value={isToggleEnabled}
//           onValueChange={toggleSwitch}
//           trackColor={{ false: '#ccc', true: '#007BFF' }}
//           thumbColor={isToggleEnabled ? '#fff' : '#888'}
//         />
//       </View>
//       {/* Dropdown Button Section (Moved to Top) */}
//       {isToggleEnabled && <View style={styles.dropdownSection}>
//         <TouchableOpacity
//           style={styles.dropdownButton}
//           activeOpacity={0.7}
//           onPress={toggleDropdown}
//         >
//           <Text style={styles.dropdownButtonText}>
//             {selectedItems.length > 0
//               ? `${selectedItems.slice(0, 3).join(', ')}${selectedItems.length > 3 ? ', ...' : ''}`
//               : 'Select options'}
//           </Text>
//           <Ionicons
//             name={isDropdownVisible ? 'chevron-up' : 'chevron-down'}
//             size={20}
//             color="#888"
//           />
//         </TouchableOpacity>
//       </View>}
      

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
//         style={styles.searchSection}
//         activeOpacity={0.7}
//         onPress={() => navigation.navigate('Main')}
//       >
//         <View style={styles.searchInput}>
//           <Ionicons name="search" size={20} color="#888" style={styles.icon} />
//           <TextInput
//             placeholder="Search for products..."
//             value={searchQuery}
//             editable={false}
//             pointerEvents="none"
//           />
//         </View>
//       </TouchableOpacity>

//       {/* Dropdown Modal */}
//       <Modal
//         visible={isDropdownVisible}
//         transparent={true}
//         animationType="fade"
//         onRequestClose={toggleDropdown}
//       >
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContainer}>
//             <Text style={styles.modalTitle}>Select Options</Text>
//             <ScrollView style={styles.modalScroll}>
//               {dropdownList.map((item, index) => (
//                 <TouchableOpacity
//                   key={index}
//                   style={styles.modalItem}
//                   onPress={() => handleSelectItem(item)}
//                 >
//                   <Ionicons
//                     name={selectedItems.includes(item) ? 'checkbox' : 'square-outline'}
//                     size={20}
//                     color="#007BFF"
//                     style={styles.checkboxIcon}
//                   />
//                   <Text style={styles.modalItemText}>{item}</Text>
//                 </TouchableOpacity>
//               ))}
//             </ScrollView>
//             <TouchableOpacity
//               style={styles.confirmButton}
//               onPress={toggleDropdown}
//             >
//               <Text style={styles.confirmButtonText}>Confirm</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
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
//     justifyContent: 'flex-end',
//     marginTop: 60,
//     alignItems: 'center',
//     paddingBottom: 10,
//   }, 
//   toggleSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     paddingHorizontal: 20,
//     marginBottom: 20,
//     margin: 20,
//     marginTop: 40,
//   },
//   toggleLabel: {
//     fontSize: 16,
//     color: '#000',
//   },
//   searchSection: {
//     flex: 2,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     paddingTop: 10,
//   },
//   barcodebox: {
//     width: '90%',
//     height: '70%',
//     borderRadius: 20,
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
//     backgroundColor: '#f9f9f9',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   dropdownSection: {
//     position: 'absolute', // Move to absolute positioning
//     top: 110, // Adjust to move the button closer to the top
//     width: '100%',
//     alignItems: 'center',
//   },
//   dropdownButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     width: '90%',
//     height: 50,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     paddingHorizontal: 15,
//   },
//   dropdownButtonText: {
//     fontSize: 16,
//     color: '#000',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     backgroundColor: '#fff',
//     marginHorizontal: 20,
//     borderRadius: 10,
//     padding: 20,
//   },
//   modalTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   modalScroll: {
//     maxHeight: 300,
//   },
//   modalItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 10,
//   },
//   modalItemText: {
//     fontSize: 16,
//     marginLeft: 10,
//   },
//   checkboxIcon: {
//     marginRight: 10,
//   },
//   confirmButton: {
//     backgroundColor: '#007BFF',
//     marginTop: 20,
//     borderRadius: 10,
//     paddingVertical: 12,
//     alignItems: 'center',
//   },
//   confirmButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// ScanScreen.navigationOptions = () => {
//   return {
//     headerShown: false,
//   };
// };

// export default ScanScreen;







import { CameraView, useCameraPermissions } from 'expo-camera';
import React, { useState, useRef, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Audio } from 'expo-av';
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
  Animated,
  Alert,
  Vibration,
} from 'react-native';

const ScanScreen = ({ navigation }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scannedData, setScannedData] = useState('');
  const [scannedType, setScannedType] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [isToggleEnabled, setIsToggleEnabled] = useState(false);
  const [scanCount, setScanCount] = useState(0);
  
  // Animation for scanning line
  const scanLineAnimation = useRef(new Animated.Value(0)).current;
  const [sound, setSound] = useState();

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

  // Initialize audio and start scanning line animation
  useEffect(() => {
    loadSound();
    startScanLineAnimation();
    
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const loadSound = async () => {
    try {
      // Enable audio session for iOS
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: false,
        playsInSilentModeIOS: true,
        shouldDuckAndroid: true,
        playThroughEarpieceAndroid: false,
      });
      
      // You can uncomment and use this if you have a custom sound file
      // const { sound } = await Audio.Sound.createAsync(
      //   require('./assets/sounds/beep.mp3') // Add your sound file here
      // );
      // setSound(sound);
    } catch (error) {
      console.log('Error setting up audio:', error);
    }
  };

  const playBeepSound = async () => {
    try {
      if (sound) {
        await sound.replayAsync();
      } else {
        // Create a quick beep using Audio API
        const { sound: beepSound } = await Audio.Sound.createAsync(
          { uri: 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayETLnHE8N2QQAoUXrTp66hVFApGn+DyvmEbBDyJzfLAbyYBNobQ8+iKOAl2oOn4xWkiFD2MzfK4ayE=' },
          { shouldPlay: true }
        );
        
        // Clean up the temporary sound
        setTimeout(() => {
          beepSound.unloadAsync();
        }, 1000);
      }
      
      // Always provide haptic feedback
      Vibration.vibrate([50, 50, 50]); // Short vibration pattern
    } catch (error) {
      console.log('Error playing sound:', error);
      // Fallback to vibration only
      Vibration.vibrate([100, 50, 100]);
    }
  };

  const startScanLineAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scanLineAnimation, {
          toValue: 1,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(scanLineAnimation, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  };

  const toggleSwitch = () => setIsToggleEnabled((prev) => !prev);

  if (!permission) {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          <Ionicons name="camera" size={50} color="#007BFF" />
          <Text style={styles.loadingText}>Requesting camera permission...</Text>
        </View>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <View style={styles.permissionContainer}>
          <Ionicons name="camera-off" size={80} color="#ccc" />
          <Text style={styles.permissionText}>Camera Access Required</Text>
          <Text style={styles.permissionSubtext}>
            We need camera permission to scan barcodes
          </Text>
          <TouchableOpacity style={styles.permissionButton} onPress={requestPermission}>
            <Text style={styles.permissionButtonText}>Grant Permission</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleBarCodeScanned = ({ type, data }) => {
    if (!scanned) {
      setScanned(true);
      setScannedData(data);
      setScannedType(type);
      setScanCount(prev => prev + 1);
      
      // Play beep sound and vibrate
      playBeepSound();
      Vibration.vibrate(50);
      
      // Auto reset after 3 seconds for continuous scanning
      setTimeout(() => {
        setScanned(false);
      }, 3000);
    }
  };

  const resetScan = () => {
    setScanned(false);
    setScannedData('');
    setScannedType('');
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

  const scanLineTranslateY = scanLineAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200], // Adjust based on your camera view height
  });

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {/* Header Stats */}
      <View style={styles.headerStats}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{scanCount}</Text>
          <Text style={styles.statLabel}>Scans</Text>
        </View>
        <View style={styles.statItem}>
          <View style={[styles.statusIndicator, { backgroundColor: scanned ? '#4CAF50' : '#FF9800' }]} />
          <Text style={styles.statLabel}>{scanned ? 'Detected' : 'Scanning'}</Text>
        </View>
      </View>

      {/* Toggle Section */}
      <View style={styles.toggleSection}>
        <Text style={styles.toggleLabel}>Add Products to List</Text>
        <Switch
          value={isToggleEnabled}
          onValueChange={toggleSwitch}
          trackColor={{ false: '#ccc', true: '#007BFF' }}
          thumbColor={isToggleEnabled ? '#fff' : '#888'}
        />
      </View>

      {/* Dropdown Section */}
      {isToggleEnabled && (
        <View style={styles.dropdownSection}>
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
        </View>
      )}

      {/* Camera Section with Scanning Line */}
      <View style={styles.cameraSection}>
        <View style={styles.cameraContainer}>
          <CameraView
            style={styles.barcodebox}
            onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            barcodeScannerSettings={{
              barcodeTypes: ['upc_e', 'upc_a', 'ean13', 'ean8', 'code128', 'code39'],
            }}
          />
          
          {/* Scanning Line Overlay */}
          <View style={styles.scanLineContainer}>
            <Animated.View
              style={[
                styles.scanLine,
                {
                  transform: [{ translateY: scanLineTranslateY }],
                },
              ]}
            />
          </View>
          
          {/* Camera Corners */}
          <View style={styles.cameraCorners}>
            <View style={[styles.corner, styles.topLeft]} />
            <View style={[styles.corner, styles.topRight]} />
            <View style={[styles.corner, styles.bottomLeft]} />
            <View style={[styles.corner, styles.bottomRight]} />
          </View>
          
          {/* Scan Status Overlay */}
          {scanned && (
            <View style={styles.scanSuccessOverlay}>
              <Ionicons name="checkmark-circle" size={60} color="#4CAF50" />
              <Text style={styles.scanSuccessText}>Scanned Successfully!</Text>
            </View>
          )}
        </View>
        
        {/* Scan Instructions */}
        <Text style={styles.instructionText}>
          {scanned ? 'Scan detected! Resetting in 3 seconds...' : 'Align barcode with red line to scan'}
        </Text>
      </View>

      {/* Scanned Data Display */}
      {scannedData && (
        <View style={styles.scannedDataSection}>
          <View style={styles.scannedDataContainer}>
            <View style={styles.scannedDataHeader}>
              <Ionicons name="barcode" size={24} color="#007BFF" />
              <Text style={styles.scannedDataTitle}>Scanned Data</Text>
              <TouchableOpacity onPress={resetScan} style={styles.resetButton}>
                <Ionicons name="refresh" size={20} color="#666" />
              </TouchableOpacity>
            </View>
            <View style={styles.scannedDataContent}>
              <Text style={styles.scannedDataLabel}>Type: <Text style={styles.scannedDataValue}>{scannedType}</Text></Text>
              <Text style={styles.scannedDataLabel}>Data: <Text style={styles.scannedDataValue}>{scannedData}</Text></Text>
            </View>
          </View>
        </View>
      )}

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
            style={styles.searchInputText}
          />
        </View>
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleDropdown}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Options</Text>
              <TouchableOpacity onPress={toggleDropdown}>
                <Ionicons name="close" size={24} color="#666" />
              </TouchableOpacity>
            </View>
            <ScrollView style={styles.modalScroll} showsVerticalScrollIndicator={false}>
              {dropdownList.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.modalItem,
                    selectedItems.includes(item) && styles.modalItemSelected
                  ]}
                  onPress={() => handleSelectItem(item)}
                  activeOpacity={0.7}
                >
                  <Ionicons
                    name={selectedItems.includes(item) ? 'checkbox' : 'square-outline'}
                    size={24}
                    color={selectedItems.includes(item) ? '#007BFF' : '#ccc'}
                    style={styles.checkboxIcon}
                  />
                  <Text style={[
                    styles.modalItemText,
                    selectedItems.includes(item) && styles.modalItemSelectedText
                  ]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={toggleDropdown}
              activeOpacity={0.8}
            >
              <Text style={styles.confirmButtonText}>
                Confirm ({selectedItems.length} selected)
              </Text>
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
    backgroundColor: '#f8f9fa',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  permissionText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 20,
    textAlign: 'center',
  },
  permissionSubtext: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
    textAlign: 'center',
    lineHeight: 24,
  },
  permissionButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 25,
    marginTop: 30,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  permissionButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  headerStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 15,
    paddingTop: 50,
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  statusIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 4,
  },
  toggleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  dropdownSection: {
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  dropdownButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 15,
    paddingVertical: 15,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  dropdownButtonText: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  cameraSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  cameraContainer: {
    position: 'relative',
    width: '100%',
    height: '80%',
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  barcodebox: {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
  },
  scanLineContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  scanLine: {
    width: '80%',
    height: 2,
    backgroundColor: '#FF0000',
    borderRadius: 1,
    elevation: 3,
    shadowColor: '#FF0000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
  },
  cameraCorners: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
  },
  corner: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderColor: '#fff',
    borderWidth: 3,
  },
  topLeft: {
    top: 20,
    left: 20,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  topRight: {
    top: 20,
    right: 20,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
  },
  bottomLeft: {
    bottom: 20,
    left: 20,
    borderRightWidth: 0,
    borderTopWidth: 0,
  },
  bottomRight: {
    bottom: 20,
    right: 20,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  scanSuccessOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanSuccessText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  instructionText: {
    marginTop: 15,
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  scannedDataSection: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  scannedDataContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  scannedDataHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  scannedDataTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
    flex: 1,
  },
  resetButton: {
    padding: 5,
  },
  scannedDataContent: {
    gap: 5,
  },
  scannedDataLabel: {
    fontSize: 14,
    color: '#666',
  },
  scannedDataValue: {
    fontWeight: 'bold',
    color: '#333',
  },
  searchSection: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 15,
    height: 50,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  searchInputText: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingTop: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  modalScroll: {
    maxHeight: 300,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  modalItemSelected: {
    backgroundColor: '#f0f8ff',
  },
  modalItemText: {
    fontSize: 16,
    color: '#333',
  },
  modalItemSelectedText: {
    color: '#007BFF',
    fontWeight: '500',
  },
  checkboxIcon: {
    marginRight: 12,
  },
  confirmButton: {
    backgroundColor: '#007BFF',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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