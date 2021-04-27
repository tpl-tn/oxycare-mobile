import React, { Component } from 'react'
import { Text, View,Linking,TouchableOpacity} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class About extends Component {
    render() {
        return (
            <View style={{flex:1,}}>
            <View style={{flex:1,margin:30}}>
             <View style={{ flexDirection:"row",height:70 }}> 
             <View style={{ width:50 }}>
             <Icon name={"phone"} size={25} color="#1976d2" />
             </View>

               <Text>
                   +216 58 186 735
               </Text>
             </View>
             <TouchableOpacity   onPress={()=>Linking.openURL('https://www.facebook.com/groups/319798895585952')}>

          
             <View style={{ flexDirection:"row",height:70 }}> 
             <View style={{ width:50 }}>
             <Icon name={"facebook-square"} size={25} color="#1976d2" />
             </View>

               <Text>
               نجم انعاون في
               </Text>
             </View>
             </TouchableOpacity>
            
             <TouchableOpacity   onPress={()=>Linking.openURL('https://www.facebook.com/groups/TunisianProgrammingLovers')}>

          
<View style={{ flexDirection:"row",height:70 }}> 
<View style={{ width:50 }}>
<Icon name={"facebook-square"} size={25} color="#1976d2" />
</View>

<Text>
التوانسة الي يحبوا البرمجة
</Text>
</View>
</TouchableOpacity>

<TouchableOpacity   onPress={()=>Linking.openURL('https://github.com/tunpl/oxycare/')}>

          
<View style={{ flexDirection:"row",height:70 }}> 
<View style={{ width:50 }}>
<Icon name={"github-square"} size={25} color="#1976d2" />
</View>

<Text>
التوانسة الي يحبوا البرمجة
</Text>
</View>
</TouchableOpacity>



<View>
    <Text style={{ fontSize:13 }}>
    an online platform to distribue oxygen concentrators ❤️
    </Text>
</View>

            </View>


        </View>
        )
    }
}
