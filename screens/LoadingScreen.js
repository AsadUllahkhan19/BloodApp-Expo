import React from 'react';
import {  View,Text,ActivityIndicator} from 'react-native';
import * as firebase from 'firebase';
// import {  } from 'react-native-gesture-handler';
export default class Loading extends React.Component{
    static navigationOptions = {
        header:null
    }

    componentDidMount(){
      firebase.auth().onAuthStateChanged((user)=>{
        if(user){
          this.props.navigation.navigate("Home")
        }
        else{
          this.props.navigation.navigate("login")
        }
      })
    }

    // componentWillMount(){
    //   this.unsubscribeAuth()
    // }

  render(){
    return (  
      <View>
   <ActivityIndicator size='large' color='#d9534f'/>
      </View>
  );
}
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//     padding:10
//   },
// });
