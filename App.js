import React from 'react';
import { createStackNavigator, createDrawerNavigator,createAppContainer } from "react-navigation";
import SignUpScreen from './screens/SignUp';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import PostBlood from './screens/PostBloodRequirements';
import MyRequests from "./screens/MyRequests";
import Notification from "./screens/Notification";
import Settings from "./screens/Settings";


const DrawerNavigator = createDrawerNavigator({
  HomeScreen: {
      screen: HomeScreen
  },
  PostBlood: {
    screen: PostBlood
},
  PostRequirement:PostBlood,
  MyRequest:MyRequests,
  Notification:Notification,
  Setting:Settings,

});

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
});

export default createAppContainer(mystack);
