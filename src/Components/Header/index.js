import React from 'react'
import { View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const Header = ({ height = 50, width = 50, mode = 'contain' ,borderRadius=50,onPress=null}) => {


  return (
   
    <View style={{ backgroundColor:"red",height, width ,position:'absolute',top:10,borderRadius,left:15,alignItems:'center',justifyContent:"center",borderRadius:30,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,}}>
       <TouchableOpacity style={{ flex:1,alignItems:"center",justifyContent:'center' }}
       onPress={onPress}
       >
      <Icon name="bars" size={30} color="white" />
      </TouchableOpacity>
    </View>
   
  )
}

export default Header