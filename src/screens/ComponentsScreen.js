import { StyleSheet, Text, View } from "react-native";
import React from "react";

const ComponentsScreen = () => {
  const name = "Samuel";

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.subTextStyle}>My name is {name}</Text>
    </View>
  );
};

export default ComponentsScreen;

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  },
});
