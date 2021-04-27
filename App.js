import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './src/Containers/Home'
import { DrawerStack } from './src/Navigators/MainNavigator'
import {
  NavigationContainer,
  useIsFocused,
} from '@react-navigation/native';
export default class App extends Component {
  render() {
    return (
      <NavigationContainer
      ref={(navigatorRef) => {
       
      }}
     >
      <DrawerStack
      // ref={(navigatorRef) => { Navigation.setTopLevelNavigator(navigatorRef) }}
      ></DrawerStack>

      {/* </SafeAreaView>  */}
    </NavigationContainer>
    )
  }
}
