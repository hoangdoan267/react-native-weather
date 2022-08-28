import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import HourlyWeatherItem from '../HourlyWeatherItem';

const HourlyWeather = () => {
  const {hourlyForecast, loading} = useSelector(
    (state: RootState) => state.weather,
  );

  if (loading) {
    return <View></View>;
  }

  const renderItem = ({item, index}) => {
    return <HourlyWeatherItem item={item} isNow={index === 0} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.locationName}>Hourly</Text>
      <FlatList
        data={hourlyForecast}
        renderItem={renderItem}
        keyExtractor={item => item.dt}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HourlyWeather;
