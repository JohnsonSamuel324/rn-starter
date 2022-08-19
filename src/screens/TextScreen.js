import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const TextScreen = () => {
  return (
    <View>
      // * WILL ALWAYS NEED TO APPLY A STYLE TO TEXTINPUT
      <TextInput placeholder="Name" style={styles.input} />
    </View>
  );
};

export default TextScreen;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 1,
    margin: 15,
  },
});
