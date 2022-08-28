import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';

const CurrentWeather = () => {
  const {currentWeather} = useSelector((state: RootState) => state.weather);

  return (
    <View style={styles.container}>
      <Text style={styles.locationName}>Current Location</Text>
      <Text style={styles.tempText}>
        {currentWeather.temp ? parseInt(currentWeather.temp) + '\u00B0' : '_ _'}
      </Text>
      <Text style={styles.weatherDescription}>
        {currentWeather.weather ? currentWeather.weather[0].main : '_ _'}
      </Text>
      <Text style={styles.weatherFeelLike}>
        Feels like:{' '}
        {currentWeather.feels_like
          ? parseInt(currentWeather.feels_like)
          : ' _ _'}
        {'\u00B0'}
      </Text>
    </View>
  );
};

export default CurrentWeather;
