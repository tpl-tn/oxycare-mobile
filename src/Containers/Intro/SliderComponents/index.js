import React, { Component } from 'react'
import { Text, View ,ImageBackground} from 'react-native'
import Carousel , { Pagination } from 'react-native-snap-carousel';
export default class SliderComponets extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            slider1ActiveSlide: 1,
            entries: [ {
                title: 'Beautiful and dramatic Antelope Canyon',
                subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
                illustration: require('../../../Assets/Images/intro1.png')
            },
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: require('../../../Assets/Images/intro2.png')
            },
            
            {
                title: 'Earlier this morning, NYC',
                subtitle: 'Lorem ipsum dolor sit amet',
                illustration: require('../../../Assets/Images/intro3.png')
            }],
        }
      }
    _renderItem = ({item, index}) => {
        return (
            
            <View style={{ height:200,width:"100%",backgroundColor:"white" }}>
                <ImageBackground 
              resize={'resize'}
                
                source={item.illustration} style={{ width:500,height:200,flex:1 }}>
            
            </ImageBackground>
            </View>
        );
    }

    render () {
        return (
            <View>

            
            <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.entries}
              renderItem={this._renderItem}
              sliderWidth={500}
              itemWidth={500}
              loop={true}
              autoplay={true}
            />
            <Pagination
            dotsLength={3}
            activeDotIndex={this.state.slider1ActiveSlide}
            containerStyle={{ paddingVertical: 8 }}
            dotColor={'#29b6f6'}
            dotStyle={{    width: 10,
                height: 10,
                borderRadius: 4,
                marginHorizontal: 8 }}
            inactiveDotColor={"black"}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
            carouselRef={this._slider1Ref}
            tappableDots={!!this._slider1Ref}
          />
          </View>
        );
    }
}
