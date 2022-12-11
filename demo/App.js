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
 
       <View style = {styles.view1}>
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


       <View style = {styles.view2}>
            <View style = {styles.four}>
                <Text style={styles.text}> 4 </Text>
            </View>
      
            <View style = {styles.five}>
                <Text style={styles.text}> 5 </Text>
            </View>
       </View>


       <View style = {styles.view3}>
            <View style = {styles.six}>
                <Text style={styles.text}> 6 </Text>
            </View>

            <View style = {styles.seven}>
                <Text style={styles.text}> 7 </Text>
            </View>
       </View>
 
     </View>
   )
 }
 
 const styles = StyleSheet.create({
   
   body:{
    flex: 1,
     flexDirection: 'column',
     alignItems:'center',
     justifyContent:'flex-start'
   },
 
   text:{
     color:'#000000',
     fontSize: 40,
     fontStyle:'italic'
   },
 
   one:{
     flex: 1,
     backgroundColor: '#00ffff',
     alignItems: 'center',
     justifyContent: 'center'
 
   },
 
   two:{
     flex: 2,
     backgroundColor: '#fff000',
     alignItems: 'center',
     justifyContent: 'center'
 
   },
 
   three:{
     flex: 3,
     backgroundColor: '#ff00ff',
     alignItems: 'center',
     justifyContent: 'center'
 
   },


   four:{
    backgroundColor: '#ff0000',
    alignItems: 'center',
    justifyContent: 'center'

  },

  five:{
    backgroundColor: '#00ff00',
    alignItems: 'center',
    justifyContent: 'center'

  },

  six:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'

  },

  seven:{
    flex: 1,
    backgroundColor: '#0040ff',
    alignItems: 'center',
    justifyContent: 'center'

  },

  view1:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center'

  },


  view2:{
    width: '100%',
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'

  },


  view3:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'

  },
 
 });
 
 export default App;
 