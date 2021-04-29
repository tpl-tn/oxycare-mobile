import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AnonymousBookingScreen from '../modules/Booking/screens/AnonymousBookingScreen'
import AuthPickerScreen from '../modules/Auth/screens/AuthPickerScreen'
import ForgotPasswordModalScreen from 'src/modules/Auth/screens/ForgotPasswordModalScreen'
import IntroScreen from 'src/modules/Auth/screens/IntroScreen'
import LoginModalScreen from 'src/modules/Auth/screens/LoginModalScreen'
import SignUpModalScreenStep1 from 'src/modules/Auth/screens/SignUpModalScreenStep1'
import SignUpModalScreenStep2 from 'src/modules/Auth/screens/SignUpModalScreenStep2'
import AddressPickerScreen from 'src/modules/Booking/AddressPicker/screens/AddressPickerScreen'
import BookingRideScreen from 'src/modules/Booking/screens/BookingRideScreen'
import RideStatusScreen from 'src/modules/RideStatus/screens/RideStatusScreen'
import I18n from 'react-native-i18n'
import { DrawerStack } from "./MainNavigator";
import BookingScreen from "../modules/Booking/screens/BookingScreen";
import IndexIntroContainer from "../Containers/Intro";

 const  Stack = createStackNavigator();



 export function AuthNavigator ({props , navigation })  {

  
  return (
    <Stack.Navigator   initialRouteName="IntroScreen" >
    
      
      
      <Stack.Screen name="IntroScreen" component={IndexIntroContainer}  options={{header: () => null,headerTitle:null}}   />
     
   
    </Stack.Navigator>

  );
}