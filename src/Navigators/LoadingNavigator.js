import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator} from './AuthNavigator';
import {DrawerStack} from './MainNavigator'
import LoaderAuth from "../Containers/LoaderAuth/index";
 const  Stack = createStackNavigator();



 export function LodingStack ({props , navigation })  {

  
  return (
    <Stack.Navigator   initialRouteName="LoaderAuth" >
      <Stack.Screen name="LoaderAuth" component={LoaderAuth}       options={{ header: () => null,headerTitle:null }}  />
 
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} 
         options={{headerShown: false}}
       />
      <Stack.Screen name="DrawerStack" component={DrawerStack}   options={{headerShown: false}}  />
     
   
    </Stack.Navigator>

  );
}