import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from './styles';
import * as dayjs from 'dayjs';

const DailyWeatherItem = props => {
  const {item} = props;
  const {temp, weather, dt} = item;
  return (
    <View style={styles.container}>
      <Text style={styles.day}>{dayjs.unix(dt).format('ddd')}</Text>
      <Image
        source={{
          uri: `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`,
        }}
        style={styles.icon}
      />
      <View style={styles.tempGroup}>
        <Text style={styles.minTemp}>
          {parseInt(temp.min)}
          {'\u00B0'} |{' '}
        </Text>
        <Text style={styles.maxTemp}>
          {parseInt(temp.max)}
          {'\u00B0'}
        </Text>
      </View>
    </View>
  );
};

export default DailyWeatherItem;
