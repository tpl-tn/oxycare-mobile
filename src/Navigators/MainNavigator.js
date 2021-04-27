import React, { useContext } from "react";






import { createDrawerNavigator } from '@react-navigation/drawer';
import SideMenuScreen from '../SideMenuScreen/index'
import IndexExampleContainer from '../Containers/Welcome/index'
import Home from "../Containers/Home";
import { OxygeneNavigator } from "./OxygeneNavigator";


const Drawer = createDrawerNavigator();

export function DrawerStack({ props, navigation }) {

  return (

    <Drawer.Navigator drawerContent={props => <SideMenuScreen {...props} />} drawerWidth={100}      >


      <Drawer.Screen name="OxygeneNavigator" component={IndexExampleContainer} />
      <Drawer.Screen name="Home" component={OxygeneNavigator} />


    </Drawer.Navigator>

  );
}