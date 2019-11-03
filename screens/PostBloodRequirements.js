import React from 'react';
import { StyleSheet, View,Text,Alert,TouchableHighlight,Image} from 'react-native';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';

import { Button } from 'native-base';



export default class PostBlood extends React.Component{


  state = {
    email:'',
    password:''
  };

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


