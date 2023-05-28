import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const IconText = ({ iconName, iconSize, iconColor, bodyText, textStyle, bodyWrapper }) => {
  const { textTheme, container } = styles;

  return (
    <View style={[container, bodyWrapper]}>
      <Feather name={iconName} size={iconSize} color={iconColor} />
      <Text style={[textStyle, textTheme]}>{bodyText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textTheme: {
    fontWeight: "bold",
  },
  container: {
    alignItems: "center",
  },
});

export default IconText;
