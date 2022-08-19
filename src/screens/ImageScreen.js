import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail
        image={require("../../assets/forest.jpg")}
        score="3"
        title="Forest"
      />
      <ImageDetail
        image={require("../../assets/beach.jpg")}
        score="7"
        title="Beach"
      />
      <ImageDetail
        image={require("../../assets/mountain.jpg")}
        score="9"
        title="Mountain"
      />
    </View>
  );
};

export default ImageScreen;

const styles = StyleSheet.create({});
