import { Button, StyleSheet, Text, View } from "react-native";
import React, { useReducer } from "react";

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increase' || type: 'decrease', payload: 1}

  switch (action.type) {
    case "increase":
      return { ...state, count: state.count + action.payload };
    case "decrease":
      return { ...state, count: state.count - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          //   counter++;

          // Do this!
          dispatch({ type: "increase", payload: 1 });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          // Don't do this!
          //   counter--;

          // Do this!
          dispatch({ type: "decrease", payload: 1 });
        }}
      />
      <Text>Current Count: {state.count}</Text>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({});
