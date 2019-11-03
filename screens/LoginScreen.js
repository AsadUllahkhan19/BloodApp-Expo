import React from 'react';
import { StyleSheet, View, Image,Text,KeyboardAvoidingView,TouchableOpacity,Alert} from 'react-native';
import { Item,Label,Input,Button  } from 'native-base';
import * as firebase from 'firebase';
import * as Facebook from 'expo-facebook';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class LoginScreen extends React.Component{

  state = {
    email:'',
    password:''
  }
    static navigationOptions = {
        title : 'Login'
    }

    userSignIn(email,pass){
       firebase.auth.signInWithEmailAndPassword(email,pass)
      .then(()=>{
        this.props.navigation.replace("Home")
      })
      .catch((error)=>{
         Alert.alert(error.message)
      })
    }

    // async loginWithFacebook(){
    //   const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync('471039260152327',{permissions: ['public_profile']})

    //   if(type == 'success')
    //   const credential = firebase.auth.FacebookAuthProvider.credential(token)

    //   firebase.auth().signInWithCredential(credential)
    //   .catch(error=>{
    //     console.log(error)
    //   })
    // }
    // componentWillMount(){
    //   this.unsubscribeAuth()
    // }
  render(){
    return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
      <View style={{alignItems:'center'}}>
      <Image source={require('../assets/done.png')} style={{width:280,height:200,borderRadius:100}}/>
      </View>
      

       
      {/* <Item floatingLabel
        style={{borderBottomColor:'red'}}
      >
        <Label>User Name</Label>
        <Input value={this.state.email}
        onChangeText={(text)=>{this.setState({email:text})}}
        />
      </Item> */}

      <Item floatingLabel
        style={{borderBottomColor:'red'}}
      >
        <Label>Email Id</Label>
        <Input value={this.state.email}
        onChangeText={(text)=>{this.setState({email:text})}}
        />
      </Item>

      <Item floatingLabel
      style={{borderBottomColor:'red'}}
      >
        <Label>Password</Label>
        <Input 
        secureTextEntry={true}
        value={this.state.password}
        onChangeText={(text)=>this.setState({password:text})}
        />
      </Item>

      <Button style={{margin:10,justifyContent:'center'}} 
       onPress={()=>this.props.navigation.navigate('PostBlood')} >
        <Text style={{fontSize:22,color:'white'}}>Login</Text>
      </Button>
      {/* {this.userSignIn(this.state.email,this.state.password)} */}
      {/* <Button style={{margin:10,justifyContent:'center'}} 
       onPress={()=>{this.loginWithFacebook()}} >
        <Text style={{fontSize:22,color:'white'}}>Login With Facebook</Text>
      </Button> */}
      

      <TouchableOpacity
      //  onPress={()=>this.props.navigation.navigate('signup')}
      >
       <Text style={{textAlign:'center'}}>Don't Have An Account?</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    padding:10
  },
});
