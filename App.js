import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import { Tabs } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import { useGetWeather } from "./src/hooks/getWeather";
import { ErrorItem } from "./src/components";

const App = () => {
  const { weather, loading, error } = useGetWeather();
  const { container } = styles;

  if (weather && weather.list && !loading) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    );
  }

  return <View style={container}>{error ? <ErrorItem /> : <ActivityIndicator size={"large"} color={"blue"} />}</View>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
  },
});

export default App;
