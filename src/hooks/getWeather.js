import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import { WEATHER_API_KEY } from "@env";

export const useGetWeather = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState([]);
  const [lon, setLon] = useState([]);

  /**
   * This function fetches weather data from the OpenWeatherMap API using latitude and longitude
   * coordinates and sets the data to state, while handling errors and loading states.
   */
  const fetchWeatherData = async () => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError("could not fetch weather");
    } finally {
      setLoading(false);
    }
  };

  /* This is a React hook that is using the `useEffect` function to fetch the user's current location
  using the `Location` module from Expo. It first requests permission to access the user's location
  and then retrieves the current position. The latitude and longitude coordinates are then set to
  state using the `setLat` and `setLon` functions. Finally, the `fetchWeatherData` function is
  called to fetch weather data using the latitude and longitude coordinates. The `useEffect` hook is
  dependent on the `lat` and `lon` state variables, so it will re-run whenever either of those
  values change. */
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        setError("permission to access location was denied");
        return;
      }

      /* `let location = await Location.getCurrentPositionAsync({});` is using the
      `getCurrentPositionAsync` function from the `Location` module of Expo to retrieve the user's
      current position. It is an asynchronous function that returns a promise that resolves to an
      object containing the user's latitude and longitude coordinates. The `await` keyword is used
      to wait for the promise to resolve before assigning the result to the `location` variable. The
      empty object passed as an argument is an options object that can be used to configure the
      behavior of the function, but in this case, it is left empty. */
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await fetchWeatherData();
    })();
  }, [lat, lon]);

  return { loading, error, weather };
};
