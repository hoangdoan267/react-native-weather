import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    fontSize: 16,
    width: 50,
  },
  temp: {
    fontSize: 16,
  },
  icon: {
    width: 48,
    height: 48,
    marginHorizontal: 20,
  },
  tempGroup: {
    flexDirection: 'row',
  },
  minTemp: {
    color: 'grey',
  },
  maxTemp: {},
});
