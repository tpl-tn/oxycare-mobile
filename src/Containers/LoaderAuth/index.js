import React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";
import AsyncStorage from '@react-native-community/async-storage';
export default class LoaderAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

 getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch(e) {
      // error reading value
    }
  }
storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  rederection =async()=>{

  }

  componentDidMount() {
    setInterval(() => {
      this.setState({visible:false})
      this.props.navigation.navigate('AuthNavigator')
    }, 3000);
  }

  render() {
    const { visible } = this.state;
    return (
     
      <AnimatedLoader
        visible={visible}
        overlayColor="rgba(255,255,255,0.75)"
        source={require("./loader.json")}
        animationStyle={styles.lottie}
        speed={1}
      >
        <Text>Doing something...</Text>
      </AnimatedLoader>
    );
  }
}

const styles = StyleSheet.create({
  lottie: {
    width: 100,
    height: 100
  }
});