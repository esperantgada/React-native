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


  return (

   <View style = {styles.body}>

      <View style = {styles.one}>
          <Text style={styles.text}> 1 </Text>
      </View>

      <View style = {styles.two}>
          <Text style={styles.text}> 2 </Text>
      </View>

      <View style = {styles.three}>
          <Text style={styles.text}> 3 </Text>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  
  body:{
    backgroundColor: '#0000ff',
    flexDirection: 'row',
    flex: 1,
    alignItems:'center',
    justifyContent:'space-between'
  },

  text:{
    color:'#000000',
    fontSize: 40,
    fontStyle:'italic'
  },

  one:{
    width: 100,
    height: 100,
    flex: 1,
    margin: 6,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center'

  },

  two:{
    width: 100,
    height: 100,
    flex: 1,
    margin: 6,
    backgroundColor: '#fff000',
    alignItems: 'center',
    justifyContent: 'center'

  },

  three:{
    width: 100,
    height: 100,
    flex: 1,
    margin: 6,
    backgroundColor: '#ff00ff',
    alignItems: 'center',
    justifyContent: 'center'

  },

  buttons:{
    width: 100,
    height: 100,
    marginTop: 50
  },
});

export default App;
