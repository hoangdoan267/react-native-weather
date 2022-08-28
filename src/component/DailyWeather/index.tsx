import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import DailyWeatherItem from '../DailyWeatherItem';

const DailyWeather = () => {
  const {dailyForecast, loading} = useSelector(
    (state: RootState) => state.weather,
  );

  if (loading) {
    return <View></View>;
  }

  const renderItem = ({item, index}) => {
    return <DailyWeatherItem item={item} isNow={index === 0} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.locationName}>7-Day Forecast</Text>
      <FlatList
        scrollEnabled={false}
        data={dailyForecast}
        renderItem={renderItem}
        keyExtractor={item => item.dt}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default DailyWeather;
