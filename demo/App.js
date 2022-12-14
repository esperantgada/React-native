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
     setItem([...items, refresh_data])
     setRefresh(false)
   }



   //When users refresh the page, this data will be shown

    const refresh_data = 
      {
        title : 'Title 2',
        data : ['Item 2-1', 'Item 2-2', 'Item 2-3', 'Item 2-4'],
      }


   const main_data = [
    {
      title : 'Title 1',
      data : ['Item 1-1', 'Item 1-2', 'Item 1-3', 'Item 1-4'],
    },

 ]
 
 
   //A list of item predefined using useSate
   const [items, setItem] = useState(main_data);

 

 
   return (

    <SectionList
        keyExtractor = {(item, index) => index.toString()}

        sections = {items}
        renderItem = {({item}) => (
           <View style = {styles.item}>
                <Text style = {styles.text}> {item}</Text>
           </View>
      
        )}

        renderSectionHeader = {({section}) =>(
          <View style = {styles.header_item}>
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
     margin: 10,
     justifyContent: 'center',
     alignItems: 'center',
     flex: 1
   },
 
 
   header_item:{
     backgroundColor: '#4ae1fa',
     borderRadius: 10,
     justifyContent: 'center',
     alignItems: 'center',
     margin: 20
   },


   item:{
    justifyContent: 'center',
    alignItems: 'center',
  }

 
 });
 
 export default App;
 