import React from 'react';
import { StyleSheet, View,Text,Alert,TouchableHighlight,Image} from 'react-native';
import {  createAppContainer,createStackNavigator } from "react-navigation";

import { Button } from 'native-base';
import * as firebase from
 'firebase';
// import {  } from 'react-native-gesture-handler';
import Menu from '../screens/Menu';
// import Loading from './LoadingScreen';



export default class HomeScreen extends React.Component{
  static navigationOptions = {
    title : 'Home'
}
  // static navigationOptions = {
  //       title="Info"
    
  // };
//   static navigationOptions = {
//     headerTitle : (<TouchableHighlight style={{ marginLeft: 10, marginTop: 15 }}
//       onPress={() => { this.props.navigation.openDrawer }}>
//       <Image
//           style={{ width: 32, height: 32 }}
//           source={{uri: 'https://png.icons8.com/ios/2x/menu-filled.png'}}
//       /> 
//   </TouchableHighlight>)
// }
  state = {
    email:'',
    password:''
  }
  render(){
    return (  <AppContainer />);
      
       {<Text style={{textAlign:'center'}}>You Are Logged In As {this.state.email}</Text> }

       { <Button full rounded danger
       style={{margin:10,justifyContent:'center'}}
       onPress={()=>this.signOut()}
      >
        <Text style={{fontSize:22,color:'white'}}>Logout</Text>
      </Button>
         } 
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


