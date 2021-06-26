import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList} from 'react-native'
import SkeletonView from '../../Components/SkeletonView'
import ActualiteItem from './Components/ActualiteItem'
const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
      },
      {
        id: '58694a0f-3da1m-471f-bd96-145m571e29d72',
        title: 'Third Item',
      },
      {
          id: '58694a0f-3da1l-471f-bdm96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-46cmk2m-aeùd5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: '3ac68afc-c605-48d3-a4lkf8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-3mda1-471f-bld96-145571e29d72',
            title: 'Third Item',
          },
          {
              id: '58694a0f-3da1-471f-bùld96-145571e29d72',
              title: 'Third Item',
            },
            {
              id: '58694a0f-3da1-471f-bdkk96-145571e29d72',
              title: 'Third Item',
            },
            {
                id: '58694a0f-3da1-471f-bd9mkm6-145571e29d72',
                title: 'Third Item',
              },
  ];
export default class Actualite extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <FlatList
                   
                     //columnWrapperStyle={{ flexDirection:"row",padding:5 }}
                     data={DATA}
                     renderItem={(items,index)=>{return(
                        <ActualiteItem key={index}></ActualiteItem>
                     )
                       

                       
                        
                     }}
                     keyExtractor={item => item.id}
                    >

                    </FlatList>
            </View>
        )
    }
}


const styles = StyleSheet.create({
  
    skeleton: {
      margin: 5,
    }
});