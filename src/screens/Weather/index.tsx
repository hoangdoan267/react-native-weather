import {View, Platform, PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import {useDispatch} from 'react-redux';
import {fetchWeatherData} from '../../reducers/weather';
import {
  CurrentWeather,
  DailyWeather,
  HourlyWeather,
  VirtualizedView,
} from '../../component';
import Geolocation from '@react-native-community/geolocation';

const WeatherScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (Platform.OS === 'ios') {
      getWeatherData();
    } else {
      checkPermissionAndroid();
    }
    return () => {};
  }, []);

  const checkPermissionAndroid = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      getWeatherData();
    }
  };

  const getWeatherData = () => {
    Geolocation.getCurrentPosition(
      async position => {
        return dispatch(
          fetchWeatherData({
            lat: position.coords.latitude.toFixed(2),
            long: position.coords.longitude.toFixed(2),
          }),
        );
      },
      error => {
        console.log(error);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <VirtualizedView
          showsVerticalScrollIndicator={false}
          overScrollMode={'always'}>
          <CurrentWeather />
          <HourlyWeather />
          <DailyWeather />
        </VirtualizedView>
      </View>
    </SafeAreaView>
  );
};

export default WeatherScreen;
