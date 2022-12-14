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
   SectionList,
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
     
   ]);


   const DATA = [
      {
        title : 'Title 1',
        data : ['Item 1-1', 'Item 1-2', 'Item 1-3', 'Item 1-4'],
      },

      {
        title : 'Title 2',
        data : ['Item 2-1', 'Item 2-2', 'Item 2-3', 'Item 2-4'],
      },

      {
        title : 'Title 3',
        data : ['Item 3-1', 'Item 3-2', 'Item 3-3', 'Item 3-4'],
      },

      {
        title : 'Title 4',
        data : ['Item 4-1', 'Item 4-2', 'Item 4-3', 'Item 4-4'],
      },

      {
        title : 'Title 5',
        data : ['Item 5-1', 'Item 5-2', 'Item 5-3', 'Item 5-4'],
      },
   ]
 
   return (

    <SectionList
        keyExtractor = {(item, index) => index.toString()}

        sections = {DATA}
        renderItem = {({item}) => (
           <Text style = {styles.text}> {item}</Text>
      
        )}

        renderSectionHeader = {({section}) =>(
          <View style = {styles.item}>
              <Text style = {styles.text}> {section.title}</Text>
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
 