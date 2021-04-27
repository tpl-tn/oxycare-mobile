import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import ItemSideMenu from '../Components/Header/ItemSideMenu'

export default class SideMenuScreen extends Component {
    render() {
        return (
            <View style={{ flex:1,backgroundColor:'rgb(68, 173, 249)' }}>
                <View style={{ height:100,alignItems:"center",justifyContent:"center" }}>
                <Image
        style={{ height:70,width:70 }}
        source={{
          uri: 'https://media.lactualite.com/2020/07/vad-oxyge-ne-1-1200x675.jpg',
        }}
      />
                </View>

            <View style={{ flex:1 }}>
                 <ItemSideMenu
                  text="Accueil" icon="home" onPress={()=>{ this.props.navigation.navigate("Home")}}  />
                        <ItemSideMenu
                  text="Contacts" icon="id-card" onPress={()=>{ this.props.navigation.navigate("Contacts")}} />
                    <ItemSideMenu
                  text="About" icon="info"  onPress={()=>{ this.props.navigation.navigate("About")}} />
                       

            

            </View>
        </View>
        )
    }
}
