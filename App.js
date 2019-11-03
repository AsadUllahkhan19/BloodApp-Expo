import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
import SignUpScreen from './screens/SignUp';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PostBlood from './screens/PostBloodRequirements';


// import HomeScreen from './screens/HomeScreen';
// import * as firebase from 'firebase';
// import {firebaseConfig} from './config';
// firebase.initializeApp(firebaseConfig);

// const DrawerNavigator = createDrawerNavigator(
//   {
//      Home:,
//     "Post_Requirements": 'PostBlood'
    
//   },
//   {
//     hideStatusBar: true,
//     drawerBackgroundColor: 'rgba(255,255,255,.9)',
//     overlayColor: '#6b52ae',
//     contentOptions: {
//       activeTintColor: '#fff',
//       activeBackgroundColor: '#6b52ae',
//     },
//   }
// );

const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
      screen: HomeScreen
  },
  PostBlood: {
    screen: PostBlood
},
  // Profile: {
  //     screen: Screens.ProfileScreen
  // }
})

const mystack = createStackNavigator({
  login:LoginScreen,
  signup:SignUpScreen,
  menu:DrawerNavigator, 
},
{
defaultNavigationOptions:{
  headerStyle: {
    backgroundColor: '#d9534f',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}
})
  
export default createAppContainer(mystack);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
