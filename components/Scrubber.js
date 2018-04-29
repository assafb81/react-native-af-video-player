import React from 'react' // eslint-disable-line
import PropTypes from 'prop-types'
import {
  View,
  StyleSheet,
} from 'react-native'
import Slider from 'react-native-slider'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  slider: {
    marginHorizontal: -10
  },
  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: '#ffffff',
  },
  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#ffffff',
    shadowRadius: 2,
    shadowOpacity: 1,
  },
})

// not in stylesheet due to issues in react-native-slider
const thumbTouchStyle = { width: 50, height: 40 };

const Scrubber = (props) => {
  const trackColor = 'rgba(255,255,255,0.5)'
  const { progress, theme } = props
  const thumbStyle = { width: 15, height: 15 }
  const trackStyle = { borderRadius: 1 }
  return (
    <View style={styles.container}>
      <Slider
        onValueChange={val => onSeek(val)}
        onSlidingComplete={val => onSeekRelease(val)}
        value={progress === Number.POSITIVE_INFINITY ? 0 : progress}
        minimumTrackTintColor={'#ffffff'}
        thumbTintColor={'#ffffff'}
        trackStyle={styles.track}
        thumbStyle={styles.thumb}
        style={styles.sliderContainer}
        thumbTouchSize={thumbTouchStyle}
      />
    </View>
  )
}

Scrubber.propTypes = {
  onSeek: PropTypes.func,
  onSeekRelease: PropTypes.func,
  progress: PropTypes.number,
  theme: PropTypes.string
}

Scrubber.defaultProps = {
  onSeek: undefined,
  onSeekRelease: undefined,
  progress: 0,
  theme: null
}

export { Scrubber }
