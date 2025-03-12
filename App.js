
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
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import AccountScreen from './screens/AccountScreen';
import ListScreen from './screens/ListScreen';
import ScanScreen from './screens/ScanScreen';
import ListItemDetails from './screens/ListItemDetails';
import MainSearch from './screens/MainSearch';
import sortedList from './screens/sortedList';


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

const mainFlow = createMaterialBottomTabNavigator(
  {
    ListFlow: {
      screen: ListFlow,
      navigationOptions: {
        tabBarLabel: 'List',
        tabBarIcon: ({ focused }) => (
          <Icon 
            name="format-list-bulleted" 
            color={focused ? '#0353a4' : 'white'} 
            size={26} 
          />
        ),
      },
    },
    ScanFlow: {
      screen: ScanFlow,
      navigationOptions: {
        tabBarLabel: 'Scan',
        tabBarIcon: ({ focused }) => (
          <Icon 
            name="barcode-scan" 
            color={focused ? '#0353a4' : 'white'} 
            size={26} 
            style={{ marginLeft: -1 }} // Prevent icon cutting
          />
        ),
      },
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarLabel: 'Account',
        tabBarIcon: ({ focused }) => (
          <Icon 
            name="account" 
            color={focused ? '#0353a4' : 'white'} 
            size={26} 
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'ListFlow',
    activeColor: '#0353a4', // Light gray for active icons
    inactiveColor: 'white', // White for inactive icons
    barStyle: {
      backgroundColor: '#60A5FA', // Bottom nav background
      paddingVertical: 5, // Prevent icon cutting
    },
  }
);

const switchNavigator = createSwitchNavigator({
  loginFlow,
  mainFlow,
});

export default createAppContainer(switchNavigator);
