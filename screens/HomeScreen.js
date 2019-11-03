import React from 'react';
import {StyleSheet, View,} from 'react-native';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home'
    };

    state = {
        email: '',
        password: ''
    };

    render() {
        return <View>

        </View>

    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
});


