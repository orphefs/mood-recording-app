import React from "react";
import { StyleSheet, View } from "react-native";
import colors from "../../config/colors";

const getMoodFrequency = (moodColors, moodColor) => {
  return moodColors.filter((x) => x === moodColor).length;
};

const getMoodFrequencies = (moodColors) => {
  return {
    red: getMoodFrequency(moodColors, "red"),
    orange: getMoodFrequency(moodColors, "orange"),
    yellow: getMoodFrequency(moodColors, "yellow"),
    green: getMoodFrequency(moodColors, "green"),
    turquoise: getMoodFrequency(moodColors, "turquoise"),
  };
};

function ColoredBar({ moodColors }) {
  const moodFrequencies = getMoodFrequencies(moodColors);

  return (
    <View style={[styles.container]}>
      <View
        style={[
          styles.square,
          { flex: moodFrequencies.red, backgroundColor: colors.red },
        ]}
      ></View>
      <View
        style={[
          styles.square,
          { flex: moodFrequencies.orange, backgroundColor: colors.orange },
        ]}
      ></View>
      <View
        style={[
          styles.square,
          { flex: moodFrequencies.yellow, backgroundColor: colors.yellow },
        ]}
      ></View>
      <View
        style={[
          styles.square,
          { flex: moodFrequencies.green, backgroundColor: colors.green },
        ]}
      ></View>
      <View
        style={[
          styles.square,
          {
            flex: moodFrequencies.turquoise,
            backgroundColor: colors.turquoise,
          },
        ]}
      ></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  square: {
    width: 0,
    height: 20,
    backgroundColor: colors.white,
    borderColor: colors.black,
    borderWidth: 0,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
  text: {
    color: colors.white,
  },
});

export default ColoredBar;
