import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ImageDetail = ({ image, score, title }) => {
  return (
    <View>
      <Image source={image} />
      <Text>
        {title} - {score}
      </Text>
    </View>
  );
};

export default ImageDetail;

const styles = StyleSheet.create({});
