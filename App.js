import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Home from './src/Containers/Home'

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '@stores';
import { DrawerStack } from './src/Navigators/MainNavigator'
import {
  NavigationContainer,
  useIsFocused,
} from '@react-navigation/native';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer
      ref={(navigatorRef) => {
       
      }}
     >
      <DrawerStack
      // ref={(navigatorRef) => { Navigation.setTopLevelNavigator(navigatorRef) }}
      ></DrawerStack>

      {/* </SafeAreaView>  */}
    </NavigationContainer>
    </PersistGate>
    </Provider>
    )
  }
}
