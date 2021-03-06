import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Screen from "./Screen";
import ColoredSlider from "./ColoredSlider";
import feelings from "../config/feelings";

export default function FeelingsVisualization({ transformedData }) {
  const [barWidths, setBarWidths] = useState({});

  useEffect(() => {
    if (transformedData) {
      computeBarWidths();
    }
  }, [transformedData]);

  const getLengthOfLargestArray = (array) => {
    const lengths = array.map((a) => a.length);
    const maxLengths = Math.max(...lengths);
    if (maxLengths !== -Infinity) return maxLengths;
    return 0;
  };

  const extractMoodColors = (feeling) => {
    return transformedData
      .filter((item) => item.feeling === feeling)
      .map((item) => item.mood)[0];
  };

  const computeBarWidths = () => {
    const widths = {};
    for (const feeling of feelings) {
      widths[feeling.label] = computeBarWidth(extractMoodColors(feeling.label));
    }
    setBarWidths(widths);
  };

  const computeBarWidth = (moodColors) => {
    const allArrays = feelings.map((feeling) =>
      extractMoodColors(feeling.label)
    );
    const maxLength = getLengthOfLargestArray(allArrays);
    const percentage = (moodColors.length / maxLength) * 100;
    if (!percentage) return "0%";
    return percentage.toString() + "%";
  };

  return (
    <>
      <Screen>
        <View style={styles.container}>
          {feelings.map((feeling) => (
            <View
              key={feeling.value}
              style={{
                flex: 1,
                width: barWidths[feeling.label],
              }}
            >
              <ColoredSlider
                feeling={feeling.label}
                moodColors={extractMoodColors(feeling.label)}
              />
            </View>
          ))}
        </View>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "baseline",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
});
