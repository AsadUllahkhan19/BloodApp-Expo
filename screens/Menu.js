import React from 'react';
import { StyleSheet, View,Text,Alert} from 'react-native';
import { Button } from 'native-base';
import * as firebase from 'firebase';
// import {  } from 'react-native-gesture-handler';
export default class Menu extends React.Component{
 

  state = {
    email:'',
    password:''
  }
   
    componentDidMount(){
    //   firebase.auth().onAuthStateChanged(user=>{
    //     if(user){
    //       this.setState({
    //         email:user.email
    //       })
    //       console.log(user)
    //     }else{
    //       this.props.navigation.replace('login')
    //     } 
    //   })
    }

    // componentWillMount(){
    //   this.unsubscribeAuth
    // }

    signOut(){
      firebase.auth().signOut()
      .catch(error=>{
        Alert.alert(error.message)
      })
    }
  render(){
    return (  
      <View>
       <Text style={{textAlign:'center'}}>You Are Logged In As {this.state.email}</Text>

       <Button full rounded danger
       style={{margin:10,justifyContent:'center'}}
       onPress={()=>this.signOut()}
      >
        <Text style={{fontSize:22,color:'white'}}>Logout</Text>
      </Button>
        
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
