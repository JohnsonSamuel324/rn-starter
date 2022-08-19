import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25.5;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +COLOR_INCREMENT || -COLOR_INCREMENT
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        color="Red"
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        onIncrease={() => setColor("red", COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onDecrease={() => setColor("green", -1 * COLOR_INCREMENT)}
        onIncrease={() => setColor("green", COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onDecrease={() => setColor("blue", -1 * COLOR_INCREMENT)}
        onIncrease={() => setColor("blue", COLOR_INCREMENT)}
      />
      <Button
        onPress={() => {
          setRed(0);
          setGreen(0);
          setBlue(0);
        }}
        title="RESET"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
      <Text>
        ({red}, {green}, {blue})
      </Text>
    </View>
  );
};

export default SquareScreen;

const styles = StyleSheet.create({});
