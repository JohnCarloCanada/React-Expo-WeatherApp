import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Tabs } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/hooks/getWeather";
import { ErrorItem } from "./src/components";

const App = () => {
  /* `const { weather, loading, error } = useGetWeather();` is using the custom hook `useGetWeather` to
  retrieve weather data from an API. The hook returns an object with three properties: `weather`,
  `loading`, and `error`. The destructuring assignment syntax is used to extract these properties
  from the returned object and assign them to the constants `weather`, `loading`, and `error`. These
  constants are then used in the conditional rendering of the component to either display the
  weather data or a loading spinner/error message. */
  const { weather, loading, error } = useGetWeather();
  const { container } = styles;

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return (
    <View style={container}>
      {error ? (
        <ErrorItem />
      ) : (
        <ActivityIndicator size={"large"} color={"blue"} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
