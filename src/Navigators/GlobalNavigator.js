import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator} from './AuthNavigator';
import {DrawerStack} from './MainNavigator'
import {LodingStack} from './LoadingNavigator'

 const Stack = createStackNavigator();
export function GlobalStack ({props , navigation })  {
  
  return (
    <Stack.Navigator 
    initialRouteName="LodingStack"
     >
        <Stack.Screen name="LodingStack" component={LodingStack}   options={{headerShown: false}}  />
      <Stack.Screen name="AuthNavigator" component={AuthNavigator} 
         options={{headerShown: false}}
       />
      <Stack.Screen name="DrawerStack" component={DrawerStack}   options={{headerShown: false}}  />
   
      
      
    </Stack.Navigator>
  );
}