import * as React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';
import AppHeader from './AppHeaderAppHeader';
import HomeScreen from './HomeScreen';
import SummaryScreen from './SummaryScreen';
import {createAppContainer, createSwitchNavigator}from 'react-navigation';
export default class App extends React.Component{
 
  render(){
    return(
    <View style={{backgroundColor:"cyan", flex:1}}>
      <AppHeader/>
      <AppContainer/>
      </View>
    )
  }
   

}
var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  SummaryScreen:SummaryScreen,
  
})

const AppContainer = createAppContainer(AppNavigator)


