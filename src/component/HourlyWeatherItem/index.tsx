import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import * as dayjs from 'dayjs';

const HourlyWeatherItem = props => {
  const {item, isNow} = props;
  const {temp, weather, dt} = item;
  return (
    <View style={styles.container}>
      <Text style={styles.temp}>
        {isNow ? 'Now' : dayjs.unix(dt).format('HH:mm')}
      </Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        }}
        style={styles.icon}
      />
      <Text style={styles.temp}>
        {parseInt(temp)}
        {'\u00B0'}
      </Text>
    </View>
  );
};

export default HourlyWeatherItem;
