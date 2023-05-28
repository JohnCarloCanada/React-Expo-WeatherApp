import React from "react";
import { IconText } from "../components";
import { SafeAreaView, Text, StyleSheet, ImageBackground, View } from "react-native";
import moment from "moment";

const City = ({ weatherData }) => {
  const { container, imageLayout, cityName, countryName, cityText, populationWrapper, populationText, riseSetWrapper, riseSetText, rowLayout } =
    styles;

  const { country, name, population, sunrise, sunset } = weatherData;

  return (
    <SafeAreaView style={container}>
      <ImageBackground style={imageLayout} source={require("../../assets/City.jpg")}>
        <Text style={[cityName, cityText]}>{country}</Text>
        <Text style={[countryName, cityText]}>{name}</Text>
        <View style={[populationWrapper, rowLayout]}>
          <IconText
            iconName={"users"}
            iconSize={50}
            iconColor={"red"}
            bodyText={`Population: ${population}`}
            textStyle={populationText}
            wrapperStyles={populationWrapper}
          />
        </View>
        <View style={[riseSetWrapper, rowLayout]}>
          <IconText
            iconName={"sunrise"}
            iconSize={50}
            iconColor={"white"}
            bodyText={moment(sunrise).format("h:mm:ss a")}
            textStyle={riseSetText}
            bodyWrapper={riseSetWrapper}
          />
          <IconText
            iconName={"sunset"}
            iconSize={50}
            iconColor={"white"}
            bodyText={moment(sunset).format("h:mm:ss a")}
            textStyle={riseSetText}
            bodyWrapper={riseSetWrapper}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageLayout: {
    flex: 1,
  },
  cityName: {
    fontSize: 40,
  },
  countryName: {
    fontSize: 30,
  },
  cityText: {
    justifyContent: "center",
    alignSelf: "center",
    color: "white",
    fontWeight: "bold",
  },
  populationWrapper: {
    justifyContent: "center",
    marginTop: 50,
  },
  populationText: {
    fontSize: 25,
    marginLeft: 7.5,
    color: "red",
  },
  riseSetWrapper: {
    justifyContent: "space-around",
    marginTop: 50,
  },
  riseSetText: {
    fontSize: 20,
    color: "white",
  },
  rowLayout: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default City;
