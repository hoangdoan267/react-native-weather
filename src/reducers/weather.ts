import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {API_URL} from '../helpers/Constants';

export const fetchWeatherData = createAsyncThunk(
  'weather/fetchWeatherData',
  async ({lat, long}: {lat: number; long: number}) => {
    const response = await fetch(
      `${API_URL}&lat=${lat}&lon=${long}&exclude=minutely&units=metric`,
    );
    return await response.json();
  },
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    currentWeather: {},
    hourlyForecast: [],
    dailyForecast: [],
    loading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchWeatherData.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchWeatherData.fulfilled, (state, payload) => {
      state.currentWeather = payload.payload.current;
      if (payload.payload.hourly.length > 24) {
        payload.payload.hourly.length = 24;
      }
      state.hourlyForecast = payload.payload.hourly;
      state.dailyForecast = payload.payload.daily;
      state.loading = false;
    });
    builder.addCase(fetchWeatherData.rejected, state => {
      state.loading = false;
    });
  },
});

export default weatherSlice.reducer;
