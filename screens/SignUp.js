import React from 'react';
import { StyleSheet,Text ,View, Image,KeyboardAvoidingView,TouchableOpacity,Alert } from 'react-native';
// import { Item, Button,Label,Input,Icon } from 'native-base';
import { Item, Label, Input, Button, Picker, Icon } from 'native-base';
import * as firebase from 'firebase';
// import { TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUpScreen extends React.Component{

  state = {
    email:'',
    password:''
  }
    static navigationOptions = {
        title : 'Sign Up'
    }
    userSignUp(email,pass){
      firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then(()=>{
        this.props.navigation.replace('Home')
      })
      .catch(error=>{
        Alert.alert(error.message)
      })
    }

    onValueChange2(value) {
      this.setState({
          selected2: value
      });
  }
  render(){
    return (
    <KeyboardAvoidingView style={styles.container} behavior='position'>
      <View style={{alignItems:'center'}}>
      <Image source={require('../assets/ben.png')} style={{width:280,height:200,borderRadius:100}}/>
      </View>
      
      <Item floatingLabel
        style={{borderBottomColor:'red'}}
      >
        <Label>First Name:</Label>
        <Input value={this.state.email}
        onChangeText={(text)=>{this.setState({email:text})}}
        />
      </Item>

      <Item floatingLabel
      style={{borderBottomColor:'red'}}
      >
        <Label>First Name:</Label>
        <Input value={this.state.password}
        onChangeText={(text)=>this.setState({password:text})}
        />
      </Item>

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
        <Input value={this.state.password}
        onChangeText={(text)=>this.setState({password:text})}
        />
      </Item>

      <Item picker>
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Blood Group"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"
                                    selectedValue={this.state.selected2}
                                    onValueChange={this.onValueChange2.bind(this)}
                                >
                                    <Picker.Item label="A Positive" value="A Positive" />
                                    <Picker.Item label="B Positive" value="B Positive" />
                                    <Picker.Item label="O Positive" value="O Positive" />
                                    <Picker.Item label="A Negative" value="A Negative" />
                                    <Picker.Item label="B Negative" value="B Negative" />
                                </Picker>
                            </Item>



      <Button full rounded danger
       style={{margin:10,justifyContent:'center'}}
       onPress={()=>this.userSignUp(this.state.email,this.state.password)}
      >
        <Text style={{fontSize:22,color:'white'}}>SignUp</Text>
      </Button>

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
       <Text style={{textAlign:'center'}}>Already have An Account?</Text>
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
