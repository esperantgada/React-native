/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';


/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


function App () {

  const [refresh, setRefresh] = useState(false)


  //The three dot here mean "the following items"
  //When page refreshes, it will add these three items

  const onRefreshView = () => {
    setRefresh(true)
    setItem([...items, {key: 19, item: 'item 19'}, {key: 20, item: 'item 20'}, {key: 21, item: 'item 21'}])
    setRefresh(false)
  }


  //A list of item predefined using useSate
  const [items, setItem] = useState([
    {key: 1, item: 'item 1'},
    {key: 2, item: 'item 2'},
    {key: 3, item: 'item 3'},
    {key: 4, item: 'item 4'},
    {key: 5, item: 'item 5'},
    {key: 6, item: 'item 6'},
    {key: 7, item: 'item 7'},
    {key: 8, item: 'item 8'},
    {key: 9, item: 'item 9'},
    {key: 10, item: 'item 10'},
    {key: 11, item: 'item 11'},
    {key: 12, item: 'item 12'},
    {key: 13, item: 'item 13'},
    {key: 14, item: 'item 14'},
    {key: 15, item: 'item 15'},
    {key: 16, item: 'item 16'},
    {key: 17, item: 'item 17'},
    {key: 18, item: 'item 18'}
    
  ])

  return (

    //ScrollView with refreshControl
   <ScrollView style = {styles.body} refreshControl = {<RefreshControl refreshing = {refresh} onRefresh = {onRefreshView}/>}>

     {
      items.map((i) => {
        return (
          <View style = {styles.item} key = {i.key}>
          <Text style = {styles.text}> {i.item}</Text>
      </View>
        )
      }
      )
     }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  body:{
      flex:1,
      backgroundColor: '#ffffff',
      flexDirection: 'column',
  },

  text:{
    color: '#000000',
    fontSize: 40,
    fontStyle:'italic',
    margin: 10
  },


  item:{
    backgroundColor: '#4ae1fa',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  }

});

export default App;
