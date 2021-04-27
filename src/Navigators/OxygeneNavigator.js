import React, { useContext } from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Contacts from "../Containers/Contacts";
import Home from "../Containers/Home";
import About from "../Containers/About";

const Stack = createStackNavigator();
export function OxygeneNavigator({ props, navigation }) {
  return (

    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        gestureEnabled: false,
        cardOverlayEnabled: true,
         headerStatusBarHeight:
          navigation.dangerouslyGetState().routes.indexOf(route) === 0
            ? 0
            : undefined
      })}
      mode="modal"
    >
        <Stack.Screen name="Home" component={Home}
       options={{ header: () => null,headerTitle:null }}
         />
      <Stack.Screen name="Contacts" component={Contacts}
        options={{
          headerTintColor: '#5faae1',
          headerTitleStyle: {color:'black'},
          title: "Contacts", headerTitle: "Contacts" }}
         />
          <Stack.Screen name="About" component={About}
        options={{
          headerTintColor: '#5faae1',
          headerTitleStyle: {color:'black'},
          title: "About", headerTitle: "About" }}
         />
         
      
    </Stack.Navigator>
  
  )
}