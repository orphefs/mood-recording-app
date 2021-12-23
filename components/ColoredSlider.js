import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RoundedSquare from "./shapes/RoundedSquare";
import ColoredBar from "./shapes/ColoredBar";

function ColoredSlider({ feeling, moodColors }) {
  return (
    <View style={styles.container}>
      <ColoredBar feeling={feeling} moodColors={moodColors} />
      <RoundedSquare value={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ColoredSlider;
