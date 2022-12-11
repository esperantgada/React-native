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

  const [count, setCount] = useState(() => countInitial())
  const [session, setSession]= useState({number: 97756877, title: 'React Native'})
  const [name, setName] = useState('Esperant')

  function decrementCount(){
    setCount(preViewCount => preViewCount - 1)
  }

  function incrementCount(){
    setCount(preViewCount => preViewCount + 1)
  }

  function handleUpdate(){
    setName('Esperant GADA')
    setSession({number: 45, title: 'Programmer'})
  }

  return (

   <View style = {styles.body}>

      <Button style={styles.buttons} title='-' onPress={decrementCount}></Button>
      <Text style={styles.text}>{count}</Text>
      <Button title='+' onPress={incrementCount} style={styles.buttons}></Button>

      <Text style={styles.text}>You clicked {count} times the button.</Text>


      <Text style={styles.text}> {name} is a mobile developer with kotlin, flutter and   {session.title}. His number is {session.number}</Text>

      <View style = {styles.button2}>
          <Button title='Click me' onPress={()=> {Linking.openURL('https://reactnative.dev/')}}></Button>
      </View>

      <View style = {styles.button1}>
          <Button title='Update value' onPress={handleUpdate} style= {styles.buttons}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  
  body:{
      alignItems:'center',
      flex:1,
      justifyContent:'center'
  },

  text:{

    fontSize: 24,
    fontStyle:'italic',
    marginLeft: 20,
    marginEnd: 20,
    marginTop: 10
  },

  button1:{
    width: 200,
    height: 100,
    marginTop: 10
  },

  button2:{
    width: 200,
    height: 100,
    marginTop: 30
  },
});

export default App;
