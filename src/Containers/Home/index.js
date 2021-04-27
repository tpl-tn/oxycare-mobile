import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import Header from '../../Components/Header';
import data from './data'

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex:1 }}>
          
                 <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 34.3927778,
         longitude: 9.602589,
         latitudeDelta: 4.015,
         longitudeDelta: 4.121,
       }}
     >
       {data.map((marker, index) => (
    <Marker
      key={index}
      coordinate={{ "latitude":marker.latitude,"longitude":marker.longitude }}
      title={marker.tel}
      description={marker.tel}
    />

    ))}
     </MapView>
     <Header onPress={()=>{this.props.navigation.toggleDrawer()}}></Header>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
