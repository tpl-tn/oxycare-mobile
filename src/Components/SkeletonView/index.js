import PropTypes from 'prop-types';
import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // eslint-disable-line



const start = { x: 0, y: 1 };
const end = { x: 1, y: 1 };

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: "#EAEAEA",
    margin: 5,
    borderRadius: 3,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  loader: {
    alignSelf: 'stretch',
  },
  gradient: {
    flex: 1,
  },
});

class SkeletonView extends React.Component {

  constructor(props) {
    super(props);

    this.translateX = new Animated.Value(Math.round(this.props.width / 2) * -1);
  }

  componentDidMount() {
    if (this.props.animated) {
      this.cycleAnimation(true);
    }
  }

  cycleAnimation = (first) => {
    this.translateX.setValue(Math.round(this.props.width / 2) * -1);
    setTimeout(() => {
      Animated.timing(
        this.translateX,
        {
          toValue: this.props.width,
          duration: this.props.duration,
          useNativeDriver: true,
        },
      ).start((data) => { if (data && data.finished) this.cycleAnimation(); });
    }, first ? 0 : this.props.interval);
  }

  render() {
    return (
      <View
        style={[
          styles.skeleton,
          ...this.props.containerStyles,
          { width: this.props.width, height: this.props.height },
        ]}
      >
        { this.props.animated &&
          <Animated.View
            style={[
              styles.loader,
              {
                transform: [{ translateX: this.translateX }],
                width: Math.round(this.props.width / 2),
              },
            ]}
          >
            <LinearGradient
              start={start}
              end={end}
              style={styles.gradient}
              colors={["#EAEAEA","#F5F5F5", "#EAEAEA"]}
            />
          </Animated.View>
        }
      </View>
    );
  }

}

SkeletonView.propTypes = {
  containerStyles: PropTypes.array,
  height: PropTypes.number,
  width: PropTypes.number,
  duration: PropTypes.number,
  interval: PropTypes.number,
  animated: PropTypes.bool,
};

SkeletonView.defaultProps = {
  containerStyles: [],
  width: 100,
  height: 20,
  duration: 700,
  interval: 700,
  animated: true,
};

export default SkeletonView;
