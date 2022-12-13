/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';

 import {
   FlatList,
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
     setItem([...items, {item: 'item 19'}, {item: 'item 20'}, {item: 'item 21'}])
     setRefresh(false)
   }
 
 
   //A list of item predefined using useSate
   const [items, setItem] = useState([
     {item: 'item 1'},
     {item: 'item 2'},
     {item: 'item 3'},
     {item: 'item 4'},
     {item: 'item 5'},
     {item: 'item 6'},
     {item: 'item 7'},
     {item: 'item 8'},
     {item: 'item 9'},
     {item: 'item 10'},
     {item: 'item 11'},
     {item: 'item 12'},
     {item: 'item 13'},
     {item: 'item 14'},
     {item: 'item 15'},
     {item: 'item 16'},
     {item: 'item 17'},
     {item: 'item 18'}
     
   ])
 
   return (

    <FlatList
        keyExtractor = {(item, index) => index.toString()}
        //horizontal
        //inverted
        //numColumns = {2}

        data={items}
        renderItem = {({item}) => (
          <View style = {styles.item} key = {item.key}>
              <Text style = {styles.text}> {item.item}</Text>
          </View>
        )}

        refreshControl = {
        <RefreshControl refreshing = {refresh} 
            onRefresh = {onRefreshView} 
            colors = {['#ff00ff']}
        />}
    
    />
 
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
 