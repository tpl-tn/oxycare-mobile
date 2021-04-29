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
import { GlobalStack } from './src/Navigators/GlobalNavigator';
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer
      ref={(navigatorRef) => {
       
      }}
     >
      <GlobalStack></GlobalStack>
     

      {/* </SafeAreaView>  */}
    </NavigationContainer>
    </PersistGate>
    </Provider>
    )
  }
}
