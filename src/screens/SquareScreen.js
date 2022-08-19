import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 25.5;

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action == { type: 'change_red' || 'change_green' || 'change_blue', payload: 25 || -25 }

  switch (action.type) {
    case "change_red":
      // ! IF CHANGE GOES ABOVE/BELOW RGB THRESHOLD: DO NOTHING
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "change_green":
      // ! IF CHANGE GOES ABOVE/BELOW RGB THRESHOLD: DO NOTHING
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "change_blue":
      // ! IF CHANGE GOES ABOVE/BELOW RGB THRESHOLD: DO NOTHING
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    case "all":
      return { red: 0, green: 0, blue: 0 };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <ColorCounter
        color="Red"
        onIncrease={() =>
          dispatch({ type: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={() =>
          dispatch({ type: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={() =>
          dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
        }
      />
      <Button
        onPress={() => {
          dispatch({ type: "all" });
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
