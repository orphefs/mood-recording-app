import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import RoundedSquare from "./shapes/RoundedSquare";
import ColoredBar from "./shapes/ColoredBar";
import App from "../App";
import AppText from "./AppText";

function ColoredSlider({ feeling, moodColors, width }) {
  return (
    <View style={styles.container}>
      <AppText>{feeling}</AppText>
      <View style={styles.barContainer}>
        <ColoredBar moodColors={moodColors} />
        <RoundedSquare value={moodColors.length} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  barContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // width: "100%",
  },
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "baseline",
  },
});

export default ColoredSlider;
