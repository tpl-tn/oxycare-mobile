import React, { Component } from 'react'
import { Text, View ,TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ItemSideMenu extends Component {
    render() {
        return (
            <View style={{ height:60,justifyContent:"center" ,margin:5,marginLeft:20}}>
                <TouchableOpacity onPress={()=>{this.props.onPress ? this.props.onPress():null}} style={{ flex:1 }} >
               
              
              <View style={{ flex:1 ,alignItems:"center",flexDirection:'row'}}>
                  <View style={{ margin:5 ,width:25,alignItems:'center'}}>
                {this.props.icon && <Icon name={this.props.icon} size={20} color="white" />} 
                  </View>
                  <View style={{ margin:5 }}>
                  {this.props.text &&    <Text style={{ color:"white",fontSize:20 }}>{this.props.text}</Text>}
               </View>
              </View>
               <View style={{ height:1,backgroundColor:'white' }}>

               </View>
               </TouchableOpacity>
            </View>
        )
    }
}
