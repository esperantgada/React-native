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
  View
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

function countInitial(){
  console.log('Run function')
  return 0
}

function App () {

  const [name, setName] = useState('Esperant')


  function handleUpdate(){
    setName('Esperant GADA')
  }

  return (

   <View style = {styles.body}>

      <Text style={styles.text}> I'm {name}.</Text>

      <View style= {styles.buttons}><Button title='Update value' onPress={handleUpdate} ></Button></View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  body:{
      width: '100%',
      height: '50%',
      alignItems:'center',
      backgroundColor: '#ffffff',
      //flex:1,
      justifyContent:'center',
      borderWidth: 10,
      borderColor: '#ff00ff',
      borderRadius: 20,
  },

  text:{
    fontSize: 50,
    fontStyle:'italic',
    marginLeft: 20,
    marginEnd: 20,
    textTransform: 'uppercase',
  },

  buttons:{
    width: '60%',
    height: 100,
    marginTop: 50
  },
});

export default App;
