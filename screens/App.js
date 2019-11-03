import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
import SignUpScreen from './screens/SignUp';
import LoginScreen from './screens/LoginScreen';
// import Loading from './screens/LoadingScreen';


import HomeScreen from './screens/HomeScreen';
import * as firebase from 'firebase';
import {firebaseConfig} from './config';
firebase.initializeApp(firebaseConfig);

const DrawerNavigator = createDrawerNavigator(
  {
     Home:HomeScreen,
    "Post_Requirements": 'PostBlood'
    
  },
  {
    hideStatusBar: true,
    drawerBackgroundColor: 'rgba(255,255,255,.9)',
    overlayColor: '#6b52ae',
    contentOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor: '#6b52ae',
    },
  }
);



const mystack = createStackNavigator({
  login:LoginScreen,
  signup:SignUpScreen,
  home:DrawerNavigator 
  // 
  
},{
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

// export default class App extends React.Component {
//   render() {
//     return (
//       <View>
//         <Mystack />
//       </View>
//     );
//   }
// }

  
export default createAppContainer(mystack);
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
