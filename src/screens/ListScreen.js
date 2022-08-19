import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: "15" },
    { name: "Friend 2", age: "20" },
    { name: "Friend 3", age: "25" },
    { name: "Friend 4", age: "30" },
    { name: "Friend 5", age: "35" },
    { name: "Friend 6", age: "40" },
    { name: "Friend 7", age: "45" },
    { name: "Friend 8", age: "50" },
    { name: "Friend 9", age: "55" },
  ];
  return (
    <View>
      <FlatList
        data={friends}
        keyExtractor={(friend) => friend.name}
        renderItem={({ item }) => {
          return (
            <Text>
              {item.name} - Age {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

export default ListScreen;

const styles = StyleSheet.create({});
