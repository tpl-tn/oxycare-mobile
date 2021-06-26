import React, { useContext } from "react";

import { createStackNavigator } from '@react-navigation/stack';
import Contacts from "../Containers/Contacts";
import Home from "../Containers/Home";
import About from "../Containers/About";
import AuthModal from "../Containers/Auth/AuthModal";
import IndexIntroContainer from "../Containers/Intro";
import LoaderAuth from "../Containers/LoaderAuth";
import Actualite from "../Containers/Actualite";

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
      
      <Stack.Screen name="LoaderAuth" component={LoaderAuth}
       options={{ header: () => null,headerTitle:null }}></Stack.Screen>
       <Stack.Screen name="IndexIntroContainer" component={IndexIntroContainer}
       options={{ header: () => null,headerTitle:null }}></Stack.Screen>
     
        <Stack.Screen name="AuthModal" component={AuthModal}
       options={{ header: () => null,headerTitle:null }}
         />
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
         
         <Stack.Screen name="Actualite" component={Actualite}
        options={{
          headerTintColor: '#5faae1',
          headerTitleStyle: {color:'black'},
          title: "Actualite", headerTitle: "Actualite" }}
         />
      
         
    </Stack.Navigator>
  
  )
}