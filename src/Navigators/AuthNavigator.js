import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';

import { DrawerStack } from "./MainNavigator";

import IndexIntroContainer from "../Containers/Intro";
import { OxygeneNavigator } from "./OxygeneNavigator";

 const  Stack = createStackNavigator();



 export function AuthNavigator ({props , navigation })  {

  
  return (
    <Stack.Navigator   initialRouteName="IntroScreen" >
    
      
      
      <Stack.Screen name="IntroScreen" component={IndexIntroContainer}  options={{header: () => null,headerTitle:null}}   />
      <Stack.Screen name="DrawerStack" component={DrawerStack}  options={{header: () => null,headerTitle:null}}   />
     
   
    </Stack.Navigator>

  );
}