import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { RowText } from "../components";
import { weatherType } from "../utils/WeatherType";

const CurrentWeather = ({ weatherData }) => {
  const { container, wrapper, tempStyles, feels, highlow, highlowWrapper, bodyWrapper, description, message } = styles;

  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather,
  } = weatherData;

  const weatherCondition = weather[0].main;

  return (
    <SafeAreaView style={[wrapper, { backgroundColor: weatherType[weatherCondition].backgroundColor }]}>
      <View style={container}>
        <Feather name={weatherType[weatherCondition].icon} size={100} color={"white"} />
        <Text style={tempStyles}>{`${Math.round(temp)}°C`}</Text>
        <Text style={feels}>{`feels like ${Math.round(feels_like)}°C`}</Text>
        <RowText
          containerStyles={highlowWrapper}
          messageOne={`High: ${Math.round(temp_max)}°C `}
          messageTwo={`Low: ${Math.round(temp_min)}°C `}
          messageOneStyles={highlow}
          messageTwoStyles={highlow}
        />
      </View>
      <RowText
        containerStyles={bodyWrapper}
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        messageOneStyles={description}
        messageTwoStyles={message}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 50,
  },
  wrapper: {
    backgroundColor: "pink",
    flex: 1,
  },
  tempStyles: {
    color: "white",
    fontSize: 48,
  },
  feels: {
    color: "white",
    fontSize: 30,
  },
  highlow: {
    color: "white",
    fontSize: 20,
  },
  highlowWrapper: {
    flexDirection: "row",
  },
  bodyWrapper: {
    paddingBottom: 20,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  description: {
    color: "white",
    fontWeight: "bold",
    fontSize: 48,
  },
  message: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default CurrentWeather;
