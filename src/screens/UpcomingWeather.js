import React from "react";
import { ListItem } from "../components";
import { SafeAreaView, StyleSheet, FlatList, ImageBackground } from "react-native";

const UpcomingWeather = ({ weatherData }) => {
  const renderedList = ({ item }) => (
    <ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} />
  );

  const { container, image } = styles;

  return (
    <SafeAreaView style={container}>
      <ImageBackground style={image} source={require("../../assets/thunderstorm.jpg")}>
        <FlatList data={weatherData} renderItem={renderedList} keyExtractor={(item) => item.dt_txt} />
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "royalBlue",
  },
  image: {
    flex: 1,
  },
});

export default UpcomingWeather;
