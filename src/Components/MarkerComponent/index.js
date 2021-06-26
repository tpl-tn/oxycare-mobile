import React, {Component} from 'react';
import {Text, View, Image, Dimensions,TouchableOpacity} from 'react-native';
import styles from './styles';
import {Marker, Callout} from 'react-native-maps';
import {FTP_URI} from '@services/url';

const WIDTH = Dimensions.get('screen').width;

class MarkerComponent extends Component {
  render() {
    const {data, screenProps} = this.props;
    return (
      <Marker
        coordinate={{
          latitude: data.latitude,
          longitude: data.longitude,
        }}>
        <Image
          source={require('../../Assets/Images/playstore.png')
          }
          resizeMode={'contain'}
          style={{height: 38.66, width: 29.25}}
        />
        <Callout 
     
        style={{width: WIDTH / 2}}>
          <Text
            style={styles.textName}
            numberOfLines={2}
            ellipsizeMode={'tail'}>
                hello
            {/* {data.name} */}
          </Text>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text
              style={[styles.infoText, {fontWeight: 'bold'}]}
              numberOfLines={3}
              ellipsizeMode={'tail'}>
                address
              {/* {screenProps.t('search:markerInfo.addr')} */}
            </Text>
            <Text style={styles.infoText}> addredd</Text>
          </View>
          {data.tel ? (
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={[styles.infoText, {fontWeight: 'bold'}]}>
                  tel :
                {/* {screenProps.t('search:markerInfo.tel') || ''} */}
              </Text>
              
              <Text style={styles.infoText}>{data.tel}</Text>
             
             
            </View>
          ) : null}
          {/* </View> */}
        </Callout>
      </Marker>
    );
  }
}

export default MarkerComponent;
