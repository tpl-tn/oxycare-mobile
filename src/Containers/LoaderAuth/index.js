import React from 'react';
import { StyleSheet,Text } from 'react-native';
import AnimatedLoader from "react-native-animated-loader";

export default class LoaderAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        visible: !this.state.visible
      });
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