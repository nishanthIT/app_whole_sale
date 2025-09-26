
// // import * as React from 'react';
// // import { View, Text } from 'react-native';
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import LoginScreen from './screens/LoginScreen';
// // import SignupScreen from './screens/SignupScreen';


// // const Stack = createNativeStackNavigator();

// // function App() {
// //   return (
// //     <NavigationContainer>
// //       <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
// //         <Stack.Screen name="Login" component={LoginScreen} />
// //         <Stack.Screen name="Signup" component={SignupScreen} />
// //       </Stack.Navigator>
// //     </NavigationContainer>
// //   );
// // }

// // export default App;



// import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';
// import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

// import LoginScreen from './screens/LoginScreen';
// import SignupScreen from './screens/SignupScreen';
// import AccountScreen from './screens/AccountScreen';
// import ListScreen from './screens/ListScreen';
// import ScanScreen from './screens/ScanScreen';
// import ListItemDetails from './screens/ListItemDetails';

// const  switchNavigator = createSwitchNavigator({

//    loginFlow: createStackNavigator({
//     Signup: SignupScreen,
//     Login:LoginScreen
//    }),

//    mainFlow: createMaterialBottomTabNavigator({

//     ListFlow: createStackNavigator({
//       List: ListScreen,
//       ListDetail: ListItemDetails

//     }),

//     scan: ScanScreen,
//     Account: AccountScreen,

//    })
// })

// export default createAppContainer(switchNavigator);



import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import ListScreen from './screens/ListScreen';
import ScanScreen from './screens/ScanScreen';
import ListItemDetails from './screens/ListItemDetails';
import MainSearch from './screens/MainSearch';
import sortedList from './screens/sortedList';
import ChatScreen from './screens/ChatScreen';
import PromotionScreen from './screens/PromotionScreen';


const loginFlow = createStackNavigator({
  Signup: SignupScreen,
  Login: LoginScreen,
});

const ListFlow = createStackNavigator({
  List: ListScreen,
  ListDetail: ListItemDetails,
  sortedList: sortedList

});

const ScanFlow = createStackNavigator({
  Scan: ScanScreen,
  Main: MainSearch,
});

// Custom PhonePe-style tab bar component
const CustomTabBar = ({ navigation, screenProps }) => {
  const { state } = navigation;
  const activeTabIndex = state.index;
  const routes = state.routes;

  const tabs = [
    { name: 'Promotion', label: 'Offers', icon: 'sale' },
    { name: 'ListFlow', label: 'List', icon: 'format-list-bulleted' },
    { name: 'ScanFlow', label: 'Scan', icon: 'barcode-scan' },
    { name: 'Chat', label: 'Chat', icon: 'chat' },
    { name: 'Account', label: 'Account', icon: 'account' },
  ];

  const navigateToTab = (routeName, index) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.tabBarContainer}>
      {/* Curved background */}
      <View style={styles.tabBarBackground}>
        {/* Scan button elevated in center */}
        <View style={styles.elevatedButtonContainer}>
          <TouchableOpacity
            style={[styles.elevatedButton, activeTabIndex === 2 && styles.elevatedButtonActive]}
            onPress={() => navigateToTab('ScanFlow', 2)}
          >
            <Icon
              name="barcode-scan"
              size={28}
              color={activeTabIndex === 2 ? '#FFFFFF' : '#5b37b7'}
            />
          </TouchableOpacity>
        </View>

        {/* Regular tabs */}
        <View style={styles.regularTabsContainer}>
          {tabs.map((tab, index) => {
            if (index === 2) return null; // Skip scan button as it's elevated

            const isActive = activeTabIndex === index;
            return (
              <TouchableOpacity
                key={tab.name}
                style={styles.tabButton}
                onPress={() => navigateToTab(tab.name, index)}
              >
                <View style={styles.tabContent}>
                  <Icon
                    name={tab.icon}
                    size={isActive ? 26 : 22}
                    color={isActive ? '#5b37b7' : '#8e8e93'}
                    style={{
                      transform: [{ scale: isActive ? 1.1 : 1 }],
                    }}
                  />
                  <Text style={[
                    styles.tabLabel,
                    { color: isActive ? '#5b37b7' : '#8e8e93' },
                    { fontWeight: isActive ? '600' : '400' }
                  ]}>
                    {tab.label}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: Platform.OS === 'android' ? 90 : 85,
    backgroundColor: 'transparent',
  },
  tabBarBackground: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 15,
    paddingBottom: Platform.OS === 'android' ? 15 : 10,
    paddingTop: 8,
  },
  regularTabsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 20,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  tabContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontSize: 11,
    marginTop: 4,
    textAlign: 'center',
  },
  elevatedButtonContainer: {
    position: 'absolute',
    top: -25,
    left: '50%',
    marginLeft: -30,
    zIndex: 10,
  },
  elevatedButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 12,
    borderWidth: 3,
    borderColor: '#5b37b7',
  },
  elevatedButtonActive: {
    backgroundColor: '#5b37b7',
    borderColor: '#5b37b7',
  },
});

const mainFlow = createBottomTabNavigator(
  {
    Promotion: {
      screen: PromotionScreen,
      navigationOptions: {
        tabBarLabel: 'Offers',
      },
    },
    ListFlow: {
      screen: ListFlow,
      navigationOptions: {
        tabBarLabel: 'List',
      },
    },
    ScanFlow: {
      screen: ScanFlow,
      navigationOptions: {
        tabBarLabel: 'Scan',
      },
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarLabel: 'Chat',
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
      },
    },
  },
  {
    initialRouteName: 'Promotion',
    tabBarComponent: CustomTabBar,
  }
);

const switchNavigator = createSwitchNavigator({
  loginFlow,
  mainFlow,
});

export default createAppContainer(switchNavigator);
