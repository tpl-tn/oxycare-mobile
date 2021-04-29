import React, { useState } from "react";
import { useDispatch, useSelector, StyleSheet } from "react-redux";
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

import Swiper from "../../Components/Swiper";
import { useNavigation } from '@react-navigation/native';
const IndexIntroContainer = ({props}) => {
    const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, paddingHorizontal: 50 }}>
        <Swiper
          dotColor={"#D6D6D6"}
          activeDotColor={"#29b6f6"}
          //  style={{height:200,width:"100%"}}
          height={70}
          paginationStyle={{ bottom: 0 }}
          dotStyle={{
            marginRight: 7,
            marginLeft: 7,
          }}
          activeDotStyle={{
            marginRight: 7,
            marginLeft: 7,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
       resizeMode={"contain"}
       style={{
           flex:1,
        width: '100%',
        height:"100%",
      
      }}
        source={require('../../Assets/Images/intro1.png')}>
        
    </Image>
        
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
               <Image
       resizeMode={"contain"}
       style={{
           flex:1,
        width: '100%',
        height:"100%",
      
      }}
        source={require('../../Assets/Images/intro2.png')}>
        
    </Image>
          </View>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
                <Image
       resizeMode={"contain"}
       style={{
           flex:1,
        width: '100%',
        height:"100%",
      
      }}
        source={require('../../Assets/Images/intro3.png')}>
        
    </Image>
          </View>
        </Swiper>
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <View style={{ marginVertical: 35 }}>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "800",
                fontStyle: "normal",
                lineHeight: 34,
                letterSpacing: 0,
                textAlign: "center",
                color: "#4a4b4d",
              }}
            >
Oxycare App
            </Text>
          </View>
          <View style={{ marginVertical: 35 }}>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: 19,
                letterSpacing: 0,
                textAlign: "center",
                color: "#7c7d7e",
              }}
            >
            
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "500",
                fontStyle: "normal",
                lineHeight: 19,
                letterSpacing: 0,
                textAlign: "center",
                color: "#7c7d7e",
              }}
            >
             a mobile android version of oxycare.
            </Text>
          </View>
        </View>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <TouchableOpacity 
            onPress={()=>{
                navigation.navigate('DrawerStack') 
            }}
              style={{
                height: 56,
                width: 307,
                borderRadius: 28,
                backgroundColor: "#29b6f6",

                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "600",
                  fontStyle: "normal",
                  lineHeight: 19,
                  letterSpacing: 0,
                  textAlign: "center",
                  color: "#ffffff",
                }}
              >
                Next
              </Text>
              </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </View>
    </View>
  );
};

export default IndexIntroContainer;
