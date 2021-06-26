import React, { Component } from 'react'
import { Text, View ,StyleSheet} from 'react-native'
import SkeletonView from '../../../../Components/SkeletonView';


export default class ActualiteItem extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{
                    margin:5,
                   backgroundColor:"white", 
                    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5, }}>

               
              <SkeletonView containerStyles={[styles.skeleton]} width={390} height={170} />
              
             
              <SkeletonView containerStyles={[styles.skeleton]} width={390} height={60 } />
              </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  
    skeleton: {
      margin: 5,
    }
});