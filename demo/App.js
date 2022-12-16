/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Button,
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


function App () {

  const [name, setName] = useState('');

  return (

   <View style = {styles.body}>

      <Text style = {styles.text}> Please, write your name here:</Text>

      <TextInput style = {styles.inputText} 
        //multiline
        //maxLength={10}
        placeholder = 'e.g. Esperant'
        onChangeText={(value) => setName(value)}
        secureTextEntry
        />


      <Text style = {styles.text}> Your name is: {name}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
  
  body:{
      backgroundColor: '#ffffff',
      flex:1,
      alignItems: 'center'
  },

  text:{
    color: '#000000',
    fontSize: 26,
    fontStyle:'italic',
    margin: 20
  },

  inputText: {
    width: 220,
    borderWidth: 1,
    borderColor: '#555',
    borderRadius: 5,
    fontSize: 20,
    textAlign: 'center'
  }

});

export default App;
