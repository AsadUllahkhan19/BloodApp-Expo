import React from 'react';
import { StyleSheet, View,Text,Alert,TouchableHighlight,Image} from 'react-native';
import { createDrawerNavigator, createAppContainer,createStackNavigator } from "react-navigation";
import HomeScreen from './HomeScreen';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
// import LoginScreen from './LoginScreen';
import { Button } from 'native-base';
// import * as firebase from 'firebase';
// import {  } from 'react-native-gesture-handler';
// import Menu from '../screens/Menu';
// import Loading from './LoadingScreen';


export default class PostBlood extends React.Component{

  static navigationOptions = {
    drawerLabel: 'Home'
 }
  static navigationOptions = {
    headerTitle : (<TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
      onPress={() => { this.props.navigation.openDrawer }}>
      <Image
          style={{ width: 32, height: 32 }}
          source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
      /> 
  </TouchableHighlight>)
}
  state = {
    email:'',
    password:''
  }
  
  render(){
    return ( 
      <View>
        <Text>This is amazing</Text>
      </View>
    );  
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding:10
  },
});


